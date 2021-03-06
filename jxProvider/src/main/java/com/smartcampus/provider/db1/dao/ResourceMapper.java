package com.smartcampus.provider.db1.dao;

import com.smartcampus.provider.entity.PageSearchEntity;
import com.smartcampus.provider.entity.ResourceEntity;
import com.smartcampus.provider.entity.TreeDataEntity;
import com.smartcampus.provider.entity.params.IdsStatusParams;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface ResourceMapper {
	@Select("SELECT * FROM jx_resource limit #{offSet},#{pageSize}")
	List<ResourceEntity> selectByPage(PageSearchEntity pageSearchEntity);

	@Insert("INSERT INTO jx_resource(title, resource_type,resource_standard,subject_code,subject_map,map_id,map,bind_id,stick,info,allow_download,create_uid) " +
			"VALUES(#{title}, #{resourceType}, #{resourceStandard}, #{subjectCode}, #{subjectMap}, #{mapId}, #{map}, #{bindId}, #{stick}, #{info}, #{allowDownload}, #{createUid})")
	@SelectKey(statement="SELECT LAST_INSERT_ID() as id", keyProperty="id", before=false, resultType=int.class)
	void   insertByEntity( ResourceEntity resourceEntity);

	@Select("SELECT COUNT(*) FROM jx_resource")
	int count();

	@Delete("DELETE from jx_resource where id=#{id}" )
	int delById(@Param("id") Integer id);

	@Delete("DELETE from jx_resource where id in (#{ids})" )
	int delByIds(@Param("ids") String ids);

	@Update("UPDATE jx_resource set audit_state = #{status}  where id = #{id}" )
	int passById(@Param("id") Integer id,@Param("status") Integer status);

	@Update({"<script>",
			"UPDATE jx_resource set audit_state = #{status}  where id in " ,
			"<foreach collection='ids' item='id' open='(' separator=',' close=')'>" ,
			"#{id}" ,
			"</foreach>",
			"</script>"})
	int passByIds(IdsStatusParams idsStatusParams);

	@Update("UPDATE jx_resource set allow_download = #{status}  where id = #{id}" )
	int stopById(@Param("id") Integer id,@Param("status") Integer status);

	@Update({"<script>",
			"UPDATE jx_resource set allow_download = #{status}  where id in " ,
			"<foreach collection='ids' item='id' open='(' separator=',' close=')'>" ,
			"#{id}" ,
			"</foreach>",
			"</script>"})
	int stopByIds(IdsStatusParams idsStatusParams);

}
