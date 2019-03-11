package com.smartcampus.provider.db1.service;

import com.smartcampus.provider.db1.dao.TreeDataMapper;
import com.smartcampus.provider.db1.dao.TreeMapper;
import com.smartcampus.provider.entity.TreeDataEntity;
import com.smartcampus.provider.entity.TreeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TreeDataService {

    @Autowired
    private TreeDataMapper treeDataMapper;


    public List<TreeDataEntity> selectNodes(int pid) {
        List<TreeDataEntity> nodes = treeDataMapper.selectNodes(pid);

        for(int i =0;i<nodes.size();i++){
            TreeDataEntity  node = nodes.get(i);
            // 如果存在clid
            if(node.getHasCld() == 1){
                node.setChildren(selectNodes(node.getId()));
            }
        }

        return nodes;
    }

    public List<TreeDataEntity> selectTree(int bindId) {
        List<TreeDataEntity> rootNodes = treeDataMapper.selectRoot(bindId);
        for(int i =0;i<rootNodes.size();i++){
            TreeDataEntity  rootNode = rootNodes.get(i);
            // 如果存在clid
            if(rootNode.getHasCld() == 1){
                rootNode.setChildren(selectNodes(rootNode.getId()));
            }
        }

        return rootNodes;
    }

    public TreeDataEntity addNode(TreeDataEntity treeDataEntity) {
        // 查询父节点
        TreeDataEntity pNode = treeDataMapper.selectById(treeDataEntity.getPid());
        if(pNode != null && pNode.getHasCld() != 1){
            pNode.setHasCld(1);
            // 更新父节点
            treeDataMapper.upNode(pNode);
        }
        // 插入子节点，返回id
        treeDataMapper.addNode(treeDataEntity);
        return treeDataEntity;
    }

    public Integer upNode(TreeDataEntity treeDataEntity) {
        return treeDataMapper.upNode(treeDataEntity);
    }

    public Integer delNode(Integer id) {
        return treeDataMapper.delNode(id);
    }
}
