/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : react_blog

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 19/07/2021 00:17:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user`  (
  `Id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `salt` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES (1, 'admin', '123456', '123456');
INSERT INTO `admin_user` VALUES (2, 'yzq', '0d2c69a74f2306c49cb1ebda4566563f', 'k211');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_id` int NOT NULL DEFAULT 0,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `article_content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `introduce` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `add_time` int NULL DEFAULT NULL,
  `view_count` int NOT NULL DEFAULT 0,
  `part_count` int NULL DEFAULT 0,
  `article_content_html` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `introduce_html` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `is_top` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 64 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (63, 3, '1', '22323232223sfsfffsf\n# dsfdsfkfkflsdffs', 'sdfd', 1627488000, 0, 0, '<p>22323232223sfsfffsf</p>\n<a id=\"toc11\" href=\"#toc11\" class=\"anchor-fix\"><h1>dsfdsfkfkflsdffs</h1></a>\n', '<p>sdfd</p>\n', 0);
INSERT INTO `article` VALUES (61, 1, '1', '1', 'sf', 1626710400, 1072, 0, '预览内容', '<p>sf</p>\n', 0);
INSERT INTO `article` VALUES (62, 1, '13', '2', 'r', 1626796800, 1089, 0, '预览内容', '<p>r</p>\n', 0);

-- ----------------------------
-- Table structure for article_type
-- ----------------------------
DROP TABLE IF EXISTS `article_type`;
CREATE TABLE `article_type`  (
  `Id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `order_num` int NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 100 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_type
-- ----------------------------
INSERT INTO `article_type` VALUES (1, '视频教程', 1, 'youtube');
INSERT INTO `article_type` VALUES (2, '大胖逼逼叨', 2, 'message');
INSERT INTO `article_type` VALUES (3, '快乐生活', 3, 'smile');
INSERT INTO `article_type` VALUES (99, '单页内容', 99, 'page');

-- ----------------------------
-- Table structure for bibidao
-- ----------------------------
DROP TABLE IF EXISTS `bibidao`;
CREATE TABLE `bibidao`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `order_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bibidao
-- ----------------------------
INSERT INTO `bibidao` VALUES (4, '程序员到底学什么语言好', 'https://www.bilibili.com/video/av73559188', 'http://newimg.jspang.com/bbd03.jpg', 0);
INSERT INTO `bibidao` VALUES (12, '2019年前端大事回顾', 'https://www.bilibili.com/video/av79321463', 'http://newimg.jspang.com/bbd10.jpg', 0);
INSERT INTO `bibidao` VALUES (2, '大胖逼逼叨01-如何高效学习新编程技术', 'https://www.bilibili.com/video/av71198525', 'http://newimg.jspang.com/bbd01.jpg', 0);
INSERT INTO `bibidao` VALUES (3, '大胖逼逼叨02-三招提高代码质量', 'https://www.bilibili.com/video/av71895773', 'http://newimg.jspang.com/bbd02.jpg', 0);
INSERT INTO `bibidao` VALUES (11, '三招提高代码质量', 'https://www.bilibili.com/video/av71895773', 'http://newimg.jspang.com/bbd02.jpg', 0);
INSERT INTO `bibidao` VALUES (7, '12年程序员感悟编程的意义', 'https://www.bilibili.com/video/av76092987', 'http://newimg.jspang.com/bbd06.jpg', 0);
INSERT INTO `bibidao` VALUES (8, '大胆预测明年软件开发趋势', 'https://www.bilibili.com/video/av76812128', 'http://newimg.jspang.com/bbd07.jpg', 0);
INSERT INTO `bibidao` VALUES (9, '如何布置桌面提高编码效率', 'https://www.bilibili.com/video/av77639437', 'http://newimg.jspang.com/bbd08.jpg', 0);
INSERT INTO `bibidao` VALUES (10, '程序员通关阿里面试全攻略', 'https://www.bilibili.com/video/av78596180', 'http://newimg.jspang.com/bbd09.jpg', 0);

SET FOREIGN_KEY_CHECKS = 1;
