/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50527
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 50527
 File Encoding         : 65001

 Date: 25/09/2021 14:39:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '标题',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '正文',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '发表时间',
  `hot` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0:非热门 1:热门',
  `hits` int(11) NOT NULL DEFAULT 0 COMMENT '点击量',
  `category_id` int(11) NOT NULL COMMENT '类目编号',
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '缩略图',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '文章表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 'JavaScript', 'JavaScript', '2021-09-17 20:43:10', 1, 100, 1, '//player.bilibili.com/player.html?aid=21589800&bvid=BV1YW411T7GX&cid=256336231&page=1&autoplay=true', NULL);
INSERT INTO `article` VALUES (2, 'HTML5', 'HTML5', '2021-09-20 20:44:31', 1, 234, 1, '//player.bilibili.com/player.html?aid=582837544&bvid=BV1r64y1T7J8&cid=281757851&page=1&autoplay=true', NULL);
INSERT INTO `article` VALUES (3, 'PHP', 'PHP', '2021-09-20 20:44:32', 0, 23, 2, '', NULL);
INSERT INTO `article` VALUES (4, 'jQuery', 'jQuery', '2021-09-20 20:44:34', 0, 234, 1, 'https://jquery.com/', NULL);
INSERT INTO `article` VALUES (5, 'Bootstrap', 'Bootstrap', '2021-09-20 20:44:37', 0, 123, 1, 'https://getbootstrap.net/', NULL);
INSERT INTO `article` VALUES (6, 'Node.js', 'Node.js', '2021-09-20 20:44:39', 0, 44, 3, 'https://nodejs.org/zh-cn/', NULL);
INSERT INTO `article` VALUES (7, 'Java', 'Java', '2021-09-20 20:44:42', 1, 5, 4, '//player.bilibili.com/player.html?aid=11361088&bvid=BV1Rx411876f&cid=18787294&page=1&autoplay=true', NULL);
INSERT INTO `article` VALUES (8, 'MyBatis', 'MyBatis', '2021-09-20 20:44:44', 0, 1289, 4, '', NULL);
INSERT INTO `article` VALUES (9, 'Spring', 'Spring', '2021-09-20 20:44:46', 0, 1245, 4, '', NULL);
INSERT INTO `article` VALUES (10, 'SpringMVC', 'SpringMVC', '2021-09-20 20:44:49', 0, 456, 4, '', NULL);
INSERT INTO `article` VALUES (11, 'Ajax', 'Ajax', '2021-09-20 20:44:51', 0, 0, 1, '', '');
INSERT INTO `article` VALUES (12, 'Swiper', 'Swiper', '2021-09-20 20:44:52', 0, 122, 1, '', NULL);
INSERT INTO `article` VALUES (13, 'express', 'express', '2021-09-20 20:44:53', 0, 45, 3, '', NULL);
INSERT INTO `article` VALUES (14, 'koa', 'koa', '2021-09-20 20:44:55', 0, 46, 3, '', NULL);
INSERT INTO `article` VALUES (15, 'egg', 'egg', '2021-09-20 20:44:58', 0, 47, 3, '', NULL);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '类目名称',
  `index` int(11) NOT NULL DEFAULT 0 COMMENT '排序，值越大越靠前',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '文章类目表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'WEB前端', 3);
INSERT INTO `category` VALUES (2, 'PHP', 2);
INSERT INTO `category` VALUES (3, 'NodeJS', 1);
INSERT INTO `category` VALUES (4, 'Java', 0);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '用户密码',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '用户表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '123456');

SET FOREIGN_KEY_CHECKS = 1;
