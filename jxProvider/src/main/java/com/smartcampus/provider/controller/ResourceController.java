
package com.smartcampus.provider.controller;


import com.smartcampus.provider.constant.RepCode;
import com.smartcampus.provider.constant.Stu;
import com.smartcampus.provider.db1.service.ResourceService;
import com.smartcampus.provider.db1.service.StudentService;
import com.smartcampus.provider.entity.*;
import com.smartcampus.provider.entity.params.IdsStatusParams;
import com.smartcampus.provider.utils.ExcelHelper;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@CrossOrigin
@Controller
@RequestMapping("/resource")
public class ResourceController {
    private static Logger log = Logger.getLogger(ExcelController.class);

    @Autowired
    private ResourceService resourceService;

    @Value("${excel.resource}")
    private String filePath;

    @ResponseBody
    @RequestMapping("/addfile")
    public Rep getToken1(@RequestParam("file") MultipartFile file,
                         @RequestParam("title") String title,
                         @RequestParam("map") String map,
                         @RequestParam("mapId") String mapId,
                         @RequestParam("resourceType") Integer resourceType,
                         @RequestParam("resourceStandard") Integer resourceStandard,
                         @RequestParam("subjectCode") String subjectCode,
                         @RequestParam("subjectMap") String subjectMap,
                         @RequestParam("bindId") Integer bindId,
                         @RequestParam("allowDownload") Integer allowDownload) {
        if (file.isEmpty()) {
            return new Rep(RepCode.NG_FILE_UPLOAD);
        }

        log.info("title:" + title);
        log.info("map:" + map);
        log.info("mapId:" + mapId);
        log.info("resourceType:" + resourceType);
        log.info("resourceStandard:" + resourceStandard);
        log.info("subjectCode:" + subjectCode);
        log.info("subjectMap:" + subjectMap);
        log.info("bindId:" + bindId);
        log.info("allowDownload:" + allowDownload);


        String fileName = file.getOriginalFilename();
        File excel = new File(filePath + '/' + fileName);
        try {
            file.transferTo(excel);
            log.info("上传成功" + excel.getName());
            ResourceEntity resourceEntity = new ResourceEntity();
            resourceEntity.setTitle(title);
            resourceEntity.setMap(map);
            resourceEntity.setMapId(mapId);
            resourceEntity.setResourceType(resourceType);
            resourceEntity.setResourceStandard(resourceStandard);
            resourceEntity.setSubjectCode(subjectCode);
            resourceEntity.setSubjectMap(subjectMap);
            resourceEntity.setBindId(bindId);
            resourceEntity.setAllowDownload(allowDownload);
            resourceService.insert(resourceEntity);

            return new Rep(RepCode.OK,resourceEntity);
        } catch (IOException e) {

        }
        return new Rep(RepCode.NG_FILE_UPLOAD);
    }

    @ResponseBody
    @RequestMapping("/getListByPage")
    public Rep getListByPage(@RequestBody Map<String,Object> reqMap) {
        String page = reqMap.get("page").toString();
        String pageSize = reqMap.get("pageSize").toString();
        System.out.println("firstRowIndex: " + page + ":" + pageSize);
        PageSearchEntity pageSearchEntity = new PageSearchEntity(page,pageSize);
        List<ResourceEntity> st1 = resourceService.selectByPage(pageSearchEntity);
        int st2 = resourceService.count();
        pageSearchEntity.setTotal(st2);
        return new Rep(RepCode.OK,st1,pageSearchEntity);
    }

    @ResponseBody
    @RequestMapping("/delById")
    public Rep delById(@RequestBody Map<String,Object> reqMap) {
        Integer id = Integer.valueOf(reqMap.get("id").toString());
        Integer res = resourceService.delById(id);
        return new Rep(RepCode.OK,res);
    }

    @ResponseBody
    @RequestMapping("/delByIds")
    public Rep delByIds(@RequestBody Map<String,Object> reqMap) {
        String ids = reqMap.get("ids").toString();
        Integer res = resourceService.delByIds(ids);
        return new Rep(RepCode.OK,res);
    }


    @ResponseBody
    @RequestMapping("/passById")
    public Rep passById(@RequestBody Map<String,Object> reqMap) {
        Integer id = Integer.valueOf(reqMap.get("id").toString());
        Integer status = Integer.valueOf(reqMap.get("status").toString());
        Integer res = resourceService.passById(id,status);
        return new Rep(RepCode.OK,res);
    }

    @ResponseBody
    @RequestMapping("/passByIds")
    public Rep passByIds(@RequestBody IdsStatusParams idsStatusParams) {
        Integer res = resourceService.passByIds( idsStatusParams);
        return new Rep(RepCode.OK,res);
    }

    @ResponseBody
    @RequestMapping("/stopById")
    public Rep stopById(@RequestBody Map<String,Object> reqMap) {
        Integer id = Integer.valueOf(reqMap.get("id").toString());
        Integer status = Integer.valueOf(reqMap.get("status").toString());
        Integer res = resourceService.stopById(id,status);
        return new Rep(RepCode.OK,res);
    }

    @ResponseBody
    @RequestMapping("/stopByIds")
    public Rep stopByIds(@RequestBody IdsStatusParams idsStatusParams) {
        Integer res = resourceService.stopByIds( idsStatusParams);
        return new Rep(RepCode.OK,res);
    }
}
