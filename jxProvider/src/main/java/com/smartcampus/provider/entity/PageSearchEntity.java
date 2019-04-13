package com.smartcampus.provider.entity;

import com.smartcampus.provider.utils.StringUtils;

public class PageSearchEntity implements java.io.Serializable{
    private static final long serialVersionUID = 8114592410057120001L;

    private Integer page = 1;
    private Integer pageSize = 50;
    private Integer offSet = 0;
    private Integer total = 0;
    private String token;

    private Object condition = null;

    public PageSearchEntity() {

    }

    public PageSearchEntity(Integer page, Integer pageSize) {
        this.page = page;
        this.pageSize = pageSize;
    }

    public PageSearchEntity(String page, String pageSize) {
        if (!StringUtils.isBlank(page) && !StringUtils.isBlank(pageSize)) {
            this.page = Integer.valueOf(page);
            this.pageSize = Integer.valueOf(pageSize);
        }
    }


    public Integer getOffSet() {
        if(this.offSet == 0){
            this.offSet = (this.page - 1) * this.pageSize;
        }
        return offSet;
    }

    public void setOffSet(Integer offSet) {
        this.offSet = offSet;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Object getCondition() {
        return condition;
    }

    public void setCondition(Object condition) {
        this.condition = condition;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
