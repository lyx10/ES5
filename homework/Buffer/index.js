// 重写Buffer.concat
Buffer.concat = function (bufferList, len = bufferList.reduce((a, b) => a + b.length, 0)) {
	let buffer = Buffer.alloc(len);
	// 记录下一次 开始拼接的 位置
	let offset = 0;
	bufferList.forEach(buf => {
    // 判断是不是 Buffer
    if (Buffer.isBuffer(buf)) {
			buf.copy(buffer, offset);
			offset += buf.length;
		}
	})
	return buffer;
}