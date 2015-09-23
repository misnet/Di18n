# Di18n 一个国际化语言支持的javascript程序
## 特点
* 采用json形式的翻译对照
* 支持指定变量替换
* 支持数值型变量时，可定义目标语言的多种复数形式
* 支持AMD规范
* 未定义译文时，直接使用源文

## 使用步骤
* 定义翻译包
```
var langsData = {
	'Please type your name':'请输入您的姓名',
	'Passowrd length must be more than %len%':'密码至少需要%len%位',
	'I have %num% apple':'我有%num% 个苹果',
	'You are awesome':'你太棒了'
};
```
* 设置翻译数据包
```
Di18n.setData(langsData);
```
* 翻译
```
//translated2的值会是 我有5个苹果
var translated1 = Di18n.tr('I have %num% apple',{num:5});

//translated2的值会是 你好 ，因为“你好”没定义，系统会自动使用源文
var translated2 = Di18n.tr('你好');

```
* 完整示例
```
var langsData = {
	'Please type your name':'请输入您的姓名',
	'Passowrd length must be more than %len%':'密码至少需要%len%位',
	'I have %num% apple':'我有%num% 个苹果',
	'You are awesome':'你太棒了'
};
Di18n.setData(langsData);

//translated就是翻译以后的内容
var translated = Di18n.tr('I have %num% apple',{num:5});
```
* 复数支持
中文是没有复数的概念，但英语或法语等其他语种有复数的要求，比如1个以上的apple就要加s变成apples
```
var langsData = {
	'I have %num% apple':['I have %num% apple','I have %num% apples']//当num<=1时，使用第1个，当num=2时使用第2个
};
Di18n.setData(langsData);
//translated1值会是I have 5 apples
var translated1 = Di18n.tr('I have %num% apple',{num:5});
```
