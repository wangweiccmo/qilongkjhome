package com.smartcampus.provider.db1.dao;

import com.smartcampus.provider.db1.dao.selectProvide.CourseEducationalProvide;
import com.smartcampus.provider.entity.CourseEducationalEntity;
import com.smartcampus.provider.entity.PageSearchEntity;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface CourseEducationalMapper {

	@Select("SELECT * FROM jx_course_educational where id=#{id}")
	CourseEducationalEntity selectById(CourseEducationalEntity courseEducationalEntity);

	@Select("SELECT * FROM jx_course_educational limit #{offSet},#{pageSize}")
	List<CourseEducationalEntity> selectByPage(PageSearchEntity pageSearchEntity);

	@SelectProvider(type = CourseEducationalProvide.class, method = "selectByConditionAndPage")
	List<CourseEducationalEntity> selectByConditionAndPage(PageSearchEntity pageSearchEntity);

	@Select("SELECT COUNT(*) FROM jx_course_educational")
	Integer count();

	@Insert("INSERT INTO jx_course_educational(code, name,point,open_unit,teaching_methods,test_type,status) " +
			"VALUES(#{code}, #{name}, #{point}, #{openUnit}, #{teachingMethods}, #{testType}, #{status})")
	@SelectKey(statement="SELECT LAST_INSERT_ID() as id", keyProperty="id", before=false, resultType=int.class)
	Integer insert(CourseEducationalEntity courseEducationalEntity);

	@Update("UPDATE jx_course_educational set status=#{status} where id=#{id}" )
	int upStatus(CourseEducationalEntity courseEducationalEntity);

	@Update("UPDATE jx_course_educational set code=#{code},name=#{name},point=#{point},open_unit=#{openUnit},teaching_methods=#{teachingMethods},test_type=#{testType},status=#{status} " +
			"where id=#{id}" )
	int upAllById(CourseEducationalEntity courseEducationalEntity);

	@Delete("DELETE from jx_course_educational where id=#{id}" )
	int delById(CourseEducationalEntity courseEducationalEntity);

}
