package com.ecourse.dao;

import com.ecourse.entity.EcUser;

import java.util.List;

/**
 * @author tomato
 * @create 2017-12-14 下午11:10
 */
public interface EcUserDao {

    /**
     * 保存
     *
     * @param ecUser 保存数据
     */
    public void saveEcUser(EcUser ecUser);

    /**
     * 更具ID查找
     *
     * @param id key
     * @return 返回ID对应的对象，没有查找到为null
     */
    public EcUser findEcUserById(Integer id);
    /**
     * 根据电话号码和邮箱查询
     */
    public EcUser findEcUserByPhandMa(String mail,String phone );
    /**
     * 更具WxId查找
     *
     * @param id key
     * @return 返回ID对应的对象，没有查找到为null
     */
    public EcUser findEcUserByWxId(Integer id);

    /**
     * 更具ID和密码进行登陆
     *
     * @param id       key
     * @param password 密码
     * @return 密码和ID正确，返回ID对应的对象，没有查找到为null
     */
    public EcUser findEcUserByLogin(Integer id, String password);

    /**
     * 按手机号，微信号，邮箱号，学号（工号）进行登陆
     *
     * @param key      登陆关键字
     * @param password 密码
     * @return 密码和ID正确，返回ID对应的对象，没有查找到为null
     */
    public EcUser findEcUserByLogin(String key, String password);

    /**
     * 其他查找
     *
     * @param params 查找的属性
     * @param hql    查找的hql语句
     * @return 一堆EcUser对象
     */
    public List<EcUser> findEcUser(List<Object> params, String hql);

    /**
     * 更新EcUser
     *
     * @param ecUser EcUser
     */
    public void updateEcUser(EcUser ecUser);

    /**
     * 删除EcUser
     *
     * @param ecUser 需要删除的EcUser
     */
    public void deletEcUser(EcUser ecUser);
}
