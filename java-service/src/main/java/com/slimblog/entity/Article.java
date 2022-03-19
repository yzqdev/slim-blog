package com.slimblog.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * 
 * </p>
 *
 * @author yzq
 * @since 2022-03-19
 */
@Getter
@Setter
public class Article implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private Integer typeId;

    private String title;

    private String articleContent;

    private String introduce;

    private LocalDateTime createTime;

    private Integer viewCount;

    private Integer partCount;

    private String articleContentHtml;

    private String introduceHtml;

    private Boolean isTop;

    private LocalDateTime updateTime;


}
