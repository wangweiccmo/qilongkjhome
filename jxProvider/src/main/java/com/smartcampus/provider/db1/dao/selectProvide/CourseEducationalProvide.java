package com.smartcampus.provider.db1.dao.selectProvide;


import com.smartcampus.provider.entity.CourseEducationalEntity;
import com.smartcampus.provider.entity.PageSearchEntity;

public class  CourseEducationalProvide {
	public static String talbeName = "jx_course_educational";
	public String selectByConditionAndPage(PageSearchEntity pageSearchEntity) {
		 String sql= "select * from " + talbeName + " where ";
		 Object conditionObj = pageSearchEntity.getCondition();
		 sql = sql + " 1 = 1 ";
		 if(conditionObj != null){

		 	 // 自定义开始
			 CourseEducationalEntity condition = (CourseEducationalEntity)conditionObj;
			 if(condition.getCode() != null){
				 sql= sql + " and code = `" + condition.getCode() +"`";
			 }
			 //-------------------------------
		 }
		 if(pageSearchEntity.getPageSize()!=null){
			 sql = sql + " limit "+pageSearchEntity.getOffSet()+","+pageSearchEntity.getPageSize()+"";
		 }
		 System.out.println("sql: " + sql);
		 return sql;
	}

}
