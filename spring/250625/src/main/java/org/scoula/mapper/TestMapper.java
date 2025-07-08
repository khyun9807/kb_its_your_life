package org.scoula.mapper;


import org.apache.ibatis.annotations.Select;

public interface TestMapper {
    @Select("select sysdate")
    public String getTitle(Long no);

    public String getContent(Long no);
}
