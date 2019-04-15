package com.smartcampus.provider.db1.service;

import com.smartcampus.provider.db1.dao.CourseMapper;
import com.smartcampus.provider.entity.CourseEntity;
import com.smartcampus.provider.entity.CourseEntity;
import com.smartcampus.provider.entity.PageSearchEntity;
import com.smartcampus.provider.entity.ResourceEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CourseService {
	@Autowired
	private CourseMapper courseMapper;

	public CourseEntity selectById(CourseEntity CourseEntity) {
		return courseMapper.selectById(CourseEntity);
	}


	public List<CourseEntity> selectByPage(PageSearchEntity pageSearchEntity){
		return courseMapper.selectByPage(pageSearchEntity);
	}

	public List<CourseEntity> selectByConditionAndPage(PageSearchEntity pageSearchEntity){
		return courseMapper.selectByConditionAndPage(pageSearchEntity);
	}

	public Integer count(){
		return courseMapper.count();
	}

	@Transactional
	public Integer insert(CourseEntity CourseEntity) {
		return courseMapper.insert(CourseEntity);
	}

	@Transactional
	public Integer upStatus(CourseEntity CourseEntity) {
		return courseMapper.upStatus(CourseEntity);
	}
	@Transactional
	public Integer upTarget(CourseEntity CourseEntity) {
		return courseMapper.upStatus(CourseEntity);
	}
	@Transactional
	public Integer upPlan(CourseEntity CourseEntity) {
		return courseMapper.upStatus(CourseEntity);
	}
	@Transactional
	public Integer upAllById(CourseEntity CourseEntity) {
		return courseMapper.upAllById(CourseEntity);
	}

	@Transactional
	public Integer delById(CourseEntity CourseEntity) {
		return courseMapper.delById(CourseEntity);
	}

}
