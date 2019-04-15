package com.smartcampus.provider.controller;

import com.smartcampus.provider.constant.RepCode;
import com.smartcampus.provider.db1.service.CourseService;
import com.smartcampus.provider.db1.service.StudentService;
import com.smartcampus.provider.entity.*;
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
public class CourseController {
	private static Logger logger = Logger.getLogger(CourseController.class);

	@Autowired
	private CourseService courseService;

	@ResponseBody
	@RequestMapping("/selectById")
	public Rep selectById(@RequestBody CourseEntity CourseEntity) {
		CourseEntity res = courseService.selectById(CourseEntity);
		return new Rep(RepCode.OK,res);
	}

	@ResponseBody
	@RequestMapping("/selectByPage")
	public Rep selectByPage(@RequestBody PageSearchEntity pageSearchEntity) {
		List<CourseEntity> res = courseService.selectByPage(pageSearchEntity);
		Integer count = courseService.count();
		return new Rep(RepCode.OK,res,count);
	}

	@ResponseBody
	@RequestMapping("/selectByConditionAndPage")
	public Rep selectByConditionAndPage(@RequestBody PageSearchEntity pageSearchEntity) {
		List<CourseEntity> res = courseService.selectByConditionAndPage(pageSearchEntity);
		Integer count = courseService.count();
		return new Rep(RepCode.OK,count);
	}

	@ResponseBody
	@RequestMapping("/insert")
	public Rep insert(@RequestBody CourseEntity CourseEntity) {
		Integer res = courseService.insert(CourseEntity);
		return new Rep(RepCode.OK,res);
	}

	@ResponseBody
	@RequestMapping("/upStatus")
	public Rep upStatus(@RequestBody CourseEntity CourseEntity) {
		Integer res = courseService.upStatus(CourseEntity);
		return new Rep(RepCode.OK,res);
	}
	@ResponseBody
	@RequestMapping("/upPlan")
	public Rep upPlan(@RequestBody CourseEntity CourseEntity) {
		Integer res = courseService.upStatus(CourseEntity);
		return new Rep(RepCode.OK,res);
	}
	@ResponseBody
	@RequestMapping("/upTarget")
	public Rep upTarget(@RequestBody CourseEntity CourseEntity) {
		Integer res = courseService.upStatus(CourseEntity);
		return new Rep(RepCode.OK,res);
	}
	@ResponseBody
	@RequestMapping("/upAllById")
	public Rep upAllById(@RequestBody CourseEntity CourseEntity) {
		Integer res = courseService.upAllById(CourseEntity);
		return new Rep(RepCode.OK,res);
	}

	@ResponseBody
	@RequestMapping("/delById")
	public Rep delById(@RequestBody CourseEntity CourseEntity) {
		Integer res = courseService.delById(CourseEntity);
		return new Rep(RepCode.OK,res);
	}
}
