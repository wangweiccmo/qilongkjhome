package com.smartcampus.provider.db1.service;

import com.smartcampus.provider.db1.dao.ResourceMapper;
import com.smartcampus.provider.entity.PageSearchEntity;
import com.smartcampus.provider.entity.ResourceEntity;
import com.smartcampus.provider.entity.params.IdsStatusParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ResourceService {
	@Autowired
	private ResourceMapper rsourceMapper;

	@Transactional
	public String insert(ResourceEntity resourceEntity) {
		 rsourceMapper.insertByEntity(resourceEntity);
		return "";
	}

	public List<ResourceEntity> selectByPage(PageSearchEntity pageSearchEntity) {

		return  rsourceMapper.selectByPage(pageSearchEntity);
	}

	public int count() {
		int st2 = rsourceMapper.count();
		return st2;
	}

	public int delById(Integer id) {
		return rsourceMapper.delById(id);
	}

	public int delByIds(String ids) {
		return rsourceMapper.delByIds(ids);
	}


	public int passById(Integer id,Integer status) {

		return rsourceMapper.passById(id,status);
	}

	public int passByIds(IdsStatusParams idsStatusParams) {
		return rsourceMapper.passByIds(idsStatusParams);
	}

	public int stopById(Integer id,Integer status) {

		return rsourceMapper.stopById(id,status);
	}

	public int stopByIds(IdsStatusParams idsStatusParams) {
		return rsourceMapper.stopByIds(idsStatusParams);
	}

}
