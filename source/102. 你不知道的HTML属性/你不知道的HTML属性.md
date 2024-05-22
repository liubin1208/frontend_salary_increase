# 你不知道的HTML属性

## inputmode

在移动端，`inputmode`值会影响弹出的键盘布局

```html
<!-- 默认值，普通任意为本 -->
<input type="text" inputmode="text" />
<!-- 电话号码 -->
<input type="text" inputmode="tel" />
<!-- url地址 -->
<input type="text" inputmode="url" /> 
<!-- 邮箱 -->
<input type="text" inputmode="email" /> 
<!-- 数字 -->
<input type="text" inputmode="numeric" /> 
<!-- 小数 -->
<input type="text" inputmode="decimal" /> 
<!-- 搜索 -->
<input type="text" inputmode="search" /> 
```

## poster

用于设置视频的预览图（视频播放前显示的图像）

```html
<video src="v.mp4" poster="cover.png"></video>
```

## multiple

通常用于文件选择和下拉列表。

当用于文件选择时：可选择多个文件

当用于下拉列表时：可选中多个选项

```html
<input type="file" multiple />
<select multiple>
  <option>...</option>
  ...
</select>
```

## accesskey

可以为元素设置快捷键，当按下快捷键后，可以聚焦元素。

```html
<!-- 按下键盘 Alt + b 可聚焦元素 -->
<input type="text" accesskey="b" />
```

在不同操作系统会有不同的访问快捷键方式

![image-20230417104036196](https://resource.duyiedu.com/yuanjin/202304171040226.png)

## tabindex

用户可以使用`tab`键切换聚焦的元素，默认情况下，切换的顺序和元素顺序一致，如果希望不一致，可以通过`tabindex`属性进行手动干预。

```html
<!-- 一个倒序切换的表单 -->
<input type="text" tabindex="3" />
<input type="text" tabindex="2" />
<input type="text" tabindex="1" />
```

## download

通常用于超链接中，使用该属性后，打开链接会触发浏览器的下载行为，而不是显示链接内容

```html
<a href="dog.jpg" download>下载图片</a>
<!-- 还可以更改下载时默认的文件名 -->
<a href="dog.jpg" download="puppy.jpg">下载图片</a>
```

## dir

该属性可以用于设置内部文字的排版方向

```html
<p dir="ltr">从左到右排版</p>
<p dir="rtl">从右到左排版</p>
<p>هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
<!-- auto: 自动检测 -->
<p dir="auto">هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.</p>
```

![image-20230417102951737](https://resource.duyiedu.com/yuanjin/202304171029775.png)

## spellcheck

该属性可以启用拼写检查，通常用于富文本编辑

```html
<div contenteditable spellcheck="true">how ar you</div>
```

![image-20230417100725155](https://resource.duyiedu.com/yuanjin/202304171007518.png)

## translate

使用`translate`可以指定某个元素的内容是否应该触发翻译，具体如何翻译取决于浏览器的设置。

```html
<!-- 开启翻译 -->
<div translate="yes">how are you</div>
<!-- 关闭翻译 -->
<div translate="no">how old are you</div>
```



