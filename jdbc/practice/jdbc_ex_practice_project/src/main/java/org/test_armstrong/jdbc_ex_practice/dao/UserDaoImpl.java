package org.test_armstrong.jdbc_ex_practice.dao;

import org.junit.jupiter.api.Assertions;
import org.test_armstrong.jdbc_ex_practice.common.JDBCUtil;
import org.test_armstrong.jdbc_ex_practice.vo.UserVO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class UserDaoImpl implements UserDao {
    private UserVO maps(ResultSet rs) throws SQLException {
        UserVO userVO = new UserVO();
        userVO.setId(rs.getString("id"));
        userVO.setPw(rs.getString("pw"));
        userVO.setName(rs.getString("name"));
        userVO.setRole(rs.getString("role"));

        return userVO;
    }

    @Override
    public int create(UserVO user) throws SQLException {
        try(Connection conn=JDBCUtil.getConnection()){
            try(PreparedStatement ps=conn.prepareStatement("insert into user(id,pw,name,role) values(?,?,?,?)")){
                int count = ps.executeUpdate();
                Assertions.assertEquals(1, count);
                return count;
            }
        }
    }

    @Override
    public List<UserVO> getAll() throws SQLException {
        List<UserVO> uvList=new ArrayList<UserVO>();

        try(Connection conn=JDBCUtil.getConnection()){
            try(Statement ps=conn.createStatement();
            ResultSet rs=ps.executeQuery("select * from user")){
                while(rs.next()){
                    uvList.add(maps(rs));
                }
            }
        }

        return uvList;
    }

    @Override
    public Optional<UserVO> getById(String id) throws SQLException {
        try(Connection conn=JDBCUtil.getConnection()){
            try(PreparedStatement ps=conn.prepareStatement("select * from user where id=?")){
                ps.setString(1,id);
                try(ResultSet rs=ps.executeQuery()){
                    if(rs.next()){
                        return Optional.of(maps(rs));
                    }
                    else{
                        return Optional.empty();
                    }
                }
            }
        }
    }

    @Override
    public int update(UserVO user) throws SQLException {
        try(Connection conn=JDBCUtil.getConnection()){
            try(PreparedStatement ps=conn.prepareStatement("update user set pw=?,name=?,role=? where id=?")){
                ps.setString(1,user.getPw());
                ps.setString(2,user.getName());
                ps.setString(3,user.getRole());
                ps.setString(4,user.getId());

                int count = ps.executeUpdate();
                Assertions.assertEquals(1, count);

                return count;
            }
        }
    }

    @Override
    public int delete(String id) throws SQLException {
        try(Connection conn=JDBCUtil.getConnection()){
            try(PreparedStatement ps=conn.prepareStatement("delete from user where id=?")){
                ps.setString(1,id);

                int count = ps.executeUpdate();
                Assertions.assertEquals(1, count);

                return count;
            }
        }
    }
}
