package com.smartcampus.provider.db1.service;

import com.smartcampus.provider.db1.dao.CourseEducationalMapper;
import com.smartcampus.provider.entity.CourseEducationalEntity;
import com.smartcampus.provider.entity.CourseEntity;
import com.smartcampus.provider.entity.PageSearchEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CourseEducationalService {
	@Autowired
	private CourseEducationalMapper courseEducationalMapper;

	public CourseEducationalEntity selectById(CourseEducationalEntity courseEducationalEntity) {
		return courseEducationalMapper.selectById(courseEducationalEntity);
	}


	public List<CourseEducationalEntity> selectByPage(PageSearchEntity pageSearchEntity){
		return courseEducationalMapper.selectByPage(pageSearchEntity);
	}

	public List<CourseEducationalEntity> selectByConditionAndPage(PageSearchEntity pageSearchEntity){
		return courseEducationalMapper.selectByConditionAndPage(pageSearchEntity);
	}

	public Integer count(){
		return courseEducationalMapper.count();
	}

	@Transactional
	public Integer insert(CourseEducationalEntity courseEducationalEntity) {
		return courseEducationalMapper.insert(courseEducationalEntity);
	}

	@Transactional
	public Integer upStatus(CourseEducationalEntity courseEducationalEntity) {
		return courseEducationalMapper.upStatus(courseEducationalEntity);
	}

	@Transactional
	public Integer upAllById(CourseEducationalEntity courseEducationalEntity) {
		return courseEducationalMapper.upAllById(courseEducationalEntity);
	}

	@Transactional
	public Integer delById(CourseEducationalEntity courseEducationalEntity) {
		return courseEducationalMapper.delById(courseEducationalEntity);
	}
}
