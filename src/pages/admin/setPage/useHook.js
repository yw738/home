export function exportDataToJSFile(data, filename = "data.js") {
  // 将数据转成字符串
  const content = `// ${filename}\nexport default ${JSON.stringify(
    data,
    null,
    2
  )};\n`;
  // 创建 Blob 对象
  const blob = new Blob([content], { type: "application/javascript" });
  // 创建下载链接
  const url = URL.createObjectURL(blob);
  // 创建 a 标签并触发下载
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  // 清理
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export let deepCloneFn = (aaaa = {}) => {
  return JSON.parse(JSON.stringify(aaaa));
};
