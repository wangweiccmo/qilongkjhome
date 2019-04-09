package com.smartcampus.provider.controller;

import com.smartcampus.provider.constant.RepCode;
import com.smartcampus.provider.db1.service.CourseEducationalService;
import com.smartcampus.provider.entity.CourseEducationalEntity;
import com.smartcampus.provider.entity.CourseEntity;
import com.smartcampus.provider.entity.PageSearchEntity;
import com.smartcampus.provider.entity.Rep;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@CrossOrigin
@Controller
@RequestMapping("/course")
public class CourseEducationalController {
	private static Logger logger = Logger.getLogger(CourseEducationalController.class);

	@Autowired
	private CourseEducationalService courseEducationalService;

	@ResponseBody
	@RequestMapping("/selectById")
	public Rep selectById(@RequestBody CourseEducationalEntity courseEducationalEntity) {
		CourseEducationalEntity res = courseEducationalService.selectById(courseEducationalEntity);
		return new Rep(RepCode.OK,res);
	}

	@ResponseBody
	@RequestMapping("/selectByPage")
	public Rep selectByPage(@RequestBody PageSearchEntity pageSearchEntity) {
		List<CourseEducationalEntity> res = courseEducationalService.selectByPage(pageSearchEntity);
		return new Rep(RepCode.OK,res);
	}

	@ResponseBody
	@RequestMapping("/selectByConditionAndPage")
	public Rep selectByConditionAndPage(@RequestBody PageSearchEntity pageSearchEntity) {
		List<CourseEducationalEntity> res = courseEducationalService.selectByConditionAndPage(pageSearchEntity);
		return new Rep(RepCode.OK,res);
	}

	@ResponseBody
	@RequestMapping("/insert")
	public Rep insert(@RequestBody CourseEducationalEntity courseEducationalEntity) {
		Integer res = courseEducationalService.insert(courseEducationalEntity);
		return new Rep(RepCode.OK,res);
	}

	@ResponseBody
	@RequestMapping("/upStatus")
	public Rep upStatus(@RequestBody CourseEducationalEntity courseEducationalEntity) {
		Integer res = courseEducationalService.upStatus(courseEducationalEntity);
		return new Rep(RepCode.OK,res);
	}

	@ResponseBody
	@RequestMapping("/upAllById")
	public Rep upAllById(@RequestBody CourseEducationalEntity courseEducationalEntity) {
		Integer res = courseEducationalService.upAllById(courseEducationalEntity);
		return new Rep(RepCode.OK,res);
	}

	@ResponseBody
	@RequestMapping("/delById")
	public Rep delById(@RequestBody CourseEducationalEntity courseEducationalEntity) {
		Integer res = courseEducationalService.upAllById(courseEducationalEntity);
		return new Rep(RepCode.OK,res);
	}
}
