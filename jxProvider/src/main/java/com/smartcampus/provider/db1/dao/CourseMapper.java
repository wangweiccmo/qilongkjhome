package com.smartcampus.provider.db1.dao;

import com.smartcampus.provider.db1.dao.selectProvide.CourseEducationalProvide;
import com.smartcampus.provider.db1.dao.selectProvide.CourseProvide;
import com.smartcampus.provider.entity.CourseEntity;
import com.smartcampus.provider.entity.CourseEntity;
import com.smartcampus.provider.entity.PageSearchEntity;
import com.smartcampus.provider.entity.StudentEntity;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface CourseMapper {



	//==================
	@Select("SELECT * FROM jx_course where id=#{id}")
	CourseEntity selectById(CourseEntity CourseEntity);

	@Select("SELECT * FROM jx_course limit #{offSet},#{pageSize}")
	List<CourseEntity> selectByPage(PageSearchEntity pageSearchEntity);

	@SelectProvider(type = CourseProvide.class, method = "selectByConditionAndPage")
	List<CourseEntity> selectByConditionAndPage(PageSearchEntity pageSearchEntity);

	@Select("SELECT COUNT(*) FROM jx_course")
	Integer count();

	@Insert("INSERT INTO jx_course(code, name,type,type_map, es_name,point,theory_class_hour,practice_class_hour,open_unit,teacher_ids,status,cover_url,books,info,test_type,class_lv,create_uid) " +
			"VALUES(#{code},#{name}, #{type}, #{typeMap}, #{esName}, #{point}, #{theoryClassHour}, #{practiceClassHour}, #{openUnit}, #{teacherIds}, #{status}, #{coverUrl}, #{books}, #{info}, #{testType}, #{classLv}, #{createUid})")
	@SelectKey(statement="SELECT LAST_INSERT_ID() as id", keyProperty="id", before=false, resultType=int.class)
	Integer insert(CourseEntity CourseEntity);

	@Update("UPDATE jx_course set status=#{status} where id=#{id}" )
	int upStatus(CourseEntity CourseEntity);


	@Update("UPDATE jx_course set plan=#{plan} where id=#{id}" )
	int upPlan(CourseEntity CourseEntity);


	@Update("UPDATE jx_course set target=#{target} where id=#{id}" )
	int upTarget(CourseEntity CourseEntity);




	@Update("UPDATE jx_course set " +
			"code=#{code}," +
			"name=#{name}," +
			"type=#{type}," +
			"type_map=#{typeMap}," +
			"es_name=#{esName}," +
			"point=#{point}," +
			"theory_class_hour=#{theoryClassHour}," +
			"practice_class_hour=#{practiceClassHour}," +
			"open_unit=#{openUnit}," +
			"teacher_ids=#{teacherIds}," +
			"status=#{status}," +
			"cover_url=#{coverUrl}," +
			"books=#{books}," +
			"info=#{info}," +
			"test_type=#{testType}," +
			"class_lv=#{classLv}" +
			" where id=#{id}" )
	int upAllById(CourseEntity CourseEntity);

	@Delete("DELETE from jx_course where id=#{id}" )
	int delById(CourseEntity CourseEntity);
	
}
