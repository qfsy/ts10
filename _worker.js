
import { connect } from 'cloudflare:sockets';
//////////////////////////////////////////////////////////////////////////配置区块////////////////////////////////////////////////////////////////////////
let 哎呀呀这是我的ID啊 = "wawa"; 
let 哎呀呀这是我的VL密钥 = "585da068-88fd-41bc-b7c4-e728a54b0cda"; 

let 私钥开关 = false 
let 咦这是我的私钥哎 = "dfhjklh1gy-_uakgfdasfdasfdsgdxhgfdld5-4fs86_sa234fh_asjk-fhjka-s9-szz547sdgfsdhdfhdf_45fawe-rw_ae87"; 

let 隐藏订阅 = false 
let 嘲讽语 = "哎呀你找到了我，但是我就是不给你看，气不气，嘿嘿嘿" 

let 我的优选 = [
  //'www.visa.com',
] 
let 我的优选TXT =[ 
  '',
] 

let 启用反代功能 = true 
let 反代IP = 'fdip.houyitfg.asia' 

let 启用SOCKS5反代 = false 
let 启用SOCKS5全局反代 = false 
let 我的SOCKS5账号 = '' 

let 我的节点名字 = '天书10' 
let 配置URL = ''
let 伪装网页 = '' 
//////////////////////////////////////////////////////////////////////////流控配置////////////////////////////////////////////////////////////////////////
let 启动控流机制 = true; 
let 最大传输限额 = 400; 
let 首包探测 = false; 
let 探测等待时间 = 1000; 
let 读取超时断开 = false; 
let 读取超时时间 = 5; 
//////////////////////////////////////////////////////////////////////////网页入口////////////////////////////////////////////////////////////////////////
export default {
  async fetch(访问请求, env) {
    const 读取我的请求标头 = 访问请求.headers.get('Upgrade');
    const url = new URL(访问请求.url);

    try {
      const 配置文件URL = env.CONFIG || 配置URL;
      const 配置文件响应 = await fetch(配置文件URL);
      const 配置数据 = await 配置文件响应.json();

      // 使用外部配置文件中的变量值替换默认值
      哎呀呀这是我的ID啊 = 配置数据.ID || 哎呀呀这是我的ID啊;
      哎呀呀这是我的VL密钥 = 配置数据.UUID || 哎呀呀这是我的VL密钥;
      我的优选TXT = 配置数据.TXT ? 配置数据.TXT.split(',') : 我的优选TXT;
      反代IP = url.searchParams.get('proxyip') || 配置数据.PROXYIP || 反代IP;
      我的SOCKS5账号 = 配置数据.SOCKS5 || 我的SOCKS5账号;
      启用SOCKS5反代 = 配置数据.SOCKS5OPEN === 'true' ? true : (配置数据.SOCKS5OPEN === 'false' ? false : 启用SOCKS5反代);
      启用SOCKS5全局反代 = 配置数据.SOCKS5GLOBAL === 'true' ? true : (配置数据.SOCKS5GLOBAL === 'false' ? false : 启用SOCKS5全局反代);
      伪装网页 = 配置数据.URL || 伪装网页;
      启动控流机制 = 配置数据.QDKZL === 'true' ? true : (配置数据.QDKZL === 'false' ? false : 启动控流机制);
      首包探测 = 配置数据.SBTC === 'true' ? true : (配置数据.SBTC === 'false' ? false : 首包探测);
      读取超时断开 = 配置数据.DQCSDK === 'true' ? true : (配置数据.DUCSDK === 'false' ? false : 读取超时断开);
      我的优选 = 配置数据.ADD ? 配置数据.ADD.split(',') : 我的优选;
      启用反代功能 = 配置数据.PROXYOPEN === 'true' ? true : (配置数据.PROXYOPEN === 'false' ? false : 启用反代功能);
    } catch (error) {
      console.error('无法加载外部配置文件:', error);
    }

    // 处理多个代理 IP
    if (反代IP.includes(',')) {
      const 代理IP数组 = 反代IP.split(',');
      反代IP = 代理IP数组[Math.floor(Math.random() * 代理IP数组.length)]; // 随机选择一个代理 IP
    }
	
    if (!读取我的请求标头 || 读取我的请求标头 !== 'websocket') {
      if (我的优选TXT) {
        const 链接数组 = Array.isArray(我的优选TXT) ? 我的优选TXT : [我的优选TXT];
        const 所有节点 = [];
        for (const 链接 of 链接数组) {
          try {
            const 响应 = await fetch(链接);
            const 文本 = await 响应.text();
            const 节点 = 文本.split('\n').map(line => line.trim()).filter(line => line);
            所有节点.push(...节点);
          } catch (e) {
            console.warn(`无法获取或解析链接: ${链接}`, e);
          }
        }
        if (所有节点.length > 0) {
          我的优选 = 所有节点;
        }
      }
      switch (url.pathname) {
        case `/${哎呀呀这是我的ID啊}`: {
          const 订阅页面 = 给我订阅页面(哎呀呀这是我的ID啊, 访问请求.headers.get('Host'));
          return new Response(`${订阅页面}`, {
            status: 200,
            headers: { "Content-Type": "text/plain;charset=utf-8" }
          });
        }
        case `/${哎呀呀这是我的ID啊}/${转码}${转码2}`: {
          if (隐藏订阅) {
            return new Response (`${嘲讽语}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          } else {
            const 通用配置文件 = 给我通用配置文件(访问请求.headers.get('Host'));
            return new Response(`${通用配置文件}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          }
        }
        case `/${哎呀呀这是我的ID啊}/${小猫}${咪}`: {
          if (隐藏订阅) {
            return new Response (`${嘲讽语}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          } else {
            const 小猫咪配置文件 = 给我小猫咪配置文件(访问请求.headers.get('Host'));
            return new Response(`${小猫咪配置文件}`, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
            });
          }
        }
        default:
          url.hostname = 伪装网页;
          url.protocol = 'https:';
          访问请求 = new Request(url, 访问请求);
          return fetch(访问请求);
      }
    } else if (读取我的请求标头 === 'websocket'){
      //这是读取环境变量的函数，由于本人并不使用，也没去测试是否有隐藏bug，懂的人可自行尝试
      /*
      const 读取环境变量 = (name, fallback, env) => {
        const raw = import.meta?.env?.[name] ?? env?.[name];
        if (raw === undefined || raw === null || raw === '') return fallback;
        if (typeof raw === 'string') {
          const trimmed = raw.trim();
          if (trimmed === 'true') return true;
          if (trimmed === 'false') return false;
          if (trimmed.includes('\n')) {
            return trimmed.split('\n').map(item => item.trim()).filter(Boolean);
          }
          if (!isNaN(trimmed) && trimmed !== '') return Number(trimmed);
          return trimmed;
        }
        return raw;
      };
      反代IP = 读取环境变量('PROXYIP', 反代IP, env);
      我的SOCKS5账号 = 读取环境变量('SOCKS5', 我的SOCKS5账号, env);
      启用SOCKS5反代 = 读取环境变量('SOCKS5OPEN', 启用SOCKS5反代, env);
      启用SOCKS5全局反代 = 读取环境变量('SOCKS5GLOBAL', 启用SOCKS5全局反代, env);
      */
      if (私钥开关) {
        const 验证我的私钥 = 访问请求.headers.get('my-key')
        if (验证我的私钥 === 咦这是我的私钥哎) {
          return await 升级WS请求(访问请求);
        }
      } else {
        return await 升级WS请求(访问请求);
      }
    }
  }
};
////////////////////////////////////////////////////////////////////////脚本主要架构//////////////////////////////////////////////////////////////////////
//第一步，读取和构建基础访问结构
async function 升级WS请求(访问请求) {
  const 创建WS接口 = new WebSocketPair();
  const [客户端, WS接口] = Object.values(创建WS接口);
  const 读取我的加密访问内容数据头 = 访问请求.headers.get('sec-websocket-protocol'); //读取访问标头中的WS通信数据
  const 解密数据 = 使用64位加解密(读取我的加密访问内容数据头); //解密目标访问数据，传递给TCP握手进程
  await 解析VL标头(解密数据, WS接口); //解析VL数据并进行TCP握手
  return new Response(null, { status: 101, webSocket: 客户端 }); //一切准备就绪后，回复客户端WS连接升级成功
}
function 使用64位加解密(还原混淆字符) {
  还原混淆字符 = 还原混淆字符.replace(/-/g, '+').replace(/_/g, '/');
  const 解密数据 = atob(还原混淆字符);
  const 解密_你_个_丁咚_咙_咚呛 = Uint8Array.from(解密数据, (c) => c.charCodeAt(0));
  return 解密_你_个_丁咚_咙_咚呛.buffer;
}
//第二步，解读VL协议数据，创建TCP握手
let 访问地址, 访问端口;
async function 解析VL标头(VL数据, WS接口, TCP接口) {
  if (!私钥开关 && 验证VL的密钥(new Uint8Array(VL数据.slice(1, 17))) !== 哎呀呀这是我的VL密钥) {
    return new Response('连接验证失败', { status: 400 });
  }
  const 获取数据定位 = new Uint8Array(VL数据)[17];
  const 提取端口索引 = 18 + 获取数据定位 + 1;
  const 建立端口缓存 = VL数据.slice(提取端口索引, 提取端口索引 + 2);
  访问端口 = new DataView(建立端口缓存).getUint16(0);
  const 提取地址索引 = 提取端口索引 + 2;
  const 建立地址缓存 = new Uint8Array(VL数据.slice(提取地址索引, 提取地址索引 + 1));
  const 识别地址类型 = 建立地址缓存[0];
  let 地址长度 = 0;
  //let 访问地址 = '';
  let 地址信息索引 = 提取地址索引 + 1;
  switch (识别地址类型) {
    case 1:
      地址长度 = 4;
      访问地址 = new Uint8Array( VL数据.slice(地址信息索引, 地址信息索引 + 地址长度) ).join('.');
      break;
    case 2:
      地址长度 = new Uint8Array( VL数据.slice(地址信息索引, 地址信息索引 + 1) )[0];
      地址信息索引 += 1;
      访问地址 = new TextDecoder().decode( VL数据.slice(地址信息索引, 地址信息索引 + 地址长度) );
      break;
    case 3:
      地址长度 = 16;
      const dataView = new DataView( VL数据.slice(地址信息索引, 地址信息索引 + 地址长度) );
      const ipv6 = [];
      for (let i = 0; i < 8; i++) { ipv6.push(dataView.getUint16(i * 2).toString(16)); }
      访问地址 = ipv6.join(':');
      break;
    default:
      return new Response('无效的访问地址', { status: 400 });
  }
  const 写入初始数据 = VL数据.slice(地址信息索引 + 地址长度);
  if (启用反代功能 && 启用SOCKS5反代 && 启用SOCKS5全局反代) {
    TCP接口 = await 创建SOCKS5接口(识别地址类型, 访问地址, 访问端口);
  } else {
    try {
    TCP接口 = connect({ hostname: 访问地址, port: 访问端口 });
    await TCP接口.opened;
    } catch {
      try {
        if (启用反代功能) {
          if (启用SOCKS5反代) {
            TCP接口 = await 创建SOCKS5接口(识别地址类型, 访问地址, 访问端口);
          } else {
            let [反代IP地址, 反代IP端口] = 反代IP.split(':');
            TCP接口 = connect({ hostname: 反代IP地址, port: 反代IP端口 || 访问端口 });
          }
        }
        await TCP接口.opened;
      } catch {
        return new Response('连接握手失败', { status: 400 });
      }
    }
  }
  建立传输管道(WS接口, TCP接口, 写入初始数据); //建立WS接口与TCP接口的传输管道
}
function 验证VL的密钥(arr, offset = 0) {
  const uuid = (转换密钥格式[arr[offset + 0]] + 转换密钥格式[arr[offset + 1]] + 转换密钥格式[arr[offset + 2]] + 转换密钥格式[arr[offset + 3]] + "-" + 转换密钥格式[arr[offset + 4]] + 转换密钥格式[arr[offset + 5]] + "-" + 转换密钥格式[arr[offset + 6]] + 转换密钥格式[arr[offset + 7]] + "-" + 转换密钥格式[arr[offset + 8]] + 转换密钥格式[arr[offset + 9]] + "-" + 转换密钥格式[arr[offset + 10]] + 转换密钥格式[arr[offset + 11]] + 转换密钥格式[arr[offset + 12]] + 转换密钥格式[arr[offset + 13]] + 转换密钥格式[arr[offset + 14]] + 转换密钥格式[arr[offset + 15]]).toLowerCase();
  return uuid;
}
const 转换密钥格式 = [];
for (let i = 0; i < 256; ++i) { 转换密钥格式.push((i + 256).toString(16).slice(1)); }
//第三步，创建客户端WS-CF-目标的传输通道并监听状态
async function 建立传输管道(WS接口, TCP接口, 写入初始数据, 写入队列 = Promise.resolve(), 回写队列 = Promise.resolve()) {
  let 字节计数 = 0;
  let 发送计数 = 0;
  let 累计接收字节数 = 0;
  let 异常结束 = false;
  let 已清理资源 = false;
  let 流结束, 返回数据, 读取超时, 读取结果;
  const 总数据阶梯延迟 = [
    { size: 1 * 1024 *1024, delay: 300 },
    { size: 50 * 1024 *1024, delay: 350 },
    { size: 100 * 1024 *1024, delay: 400 },
    { size: 200 * 1024 *1024, delay: 500 },
  ];
  function 获取当前总延迟() {
    return (总数据阶梯延迟.slice().reverse().find(({ size }) => 累计接收字节数 >= size) ?? { delay: 250 }).delay;
  }
  WS接口.accept();
  WS接口.send(new Uint8Array([0, 0]));
  const 传输数据 = TCP接口.writable.getWriter();
  const 读取数据 = TCP接口.readable.getReader();
  if (写入初始数据) 写入队列 = 写入队列.then(() => 传输数据.write(写入初始数据)).catch(); //向TCP接口推送标头中提取的初始访问数据
  WS接口.addEventListener('message', event => 写入队列 = 写入队列.then(() => 传输数据.write(event.data)).catch());
  启动回传();
  if (!读取超时断开) 定时双端保活(); //由于原理是WS通道，TCP流转发，所以这个维持双端保活的方式不见得有效，觉得没意义的可以注释掉这行
  async function 启动回传() {
    try {
      while (!已清理资源) {
        if (首包探测) {
          读取结果 = await 带超时读取(读取数据, 探测等待时间); //首包短时间无响应则直接丢弃连接
        } else {
          if (读取超时断开) {
            读取结果 = await 带超时读取(读取数据, 读取超时时间*1000); //长时间未返回数据则结束传输，防止长时间挂起网络卡死，也可以给CF腾出资源处理其他请求
          } else {
            读取结果 = await 读取数据.read();
          }
        }
        ({ done: 流结束, value: 返回数据, 超时: 读取超时 } = 读取结果);
        if (流结束) {
          if (读取超时) {
            if (首包探测) throw new Error (`首包探测超时，目标: ${探测等待时间/1000} 秒未返回响应`)
            throw new Error ("读取超时")
          }
          清理资源();
          break;
        }
        累计接收字节数 += 返回数据.length;
        if (返回数据.length > 0 && 首包探测) {
          添加回写任务(返回数据, false);
          首包探测 = false;
          continue;
        }
        if (返回数据.length > 0 && !首包探测) {
          if (启动控流机制) {
            if (++发送计数 >= 500) {
              添加回写任务(返回数据, true);
              发送计数 = 0;
            } else {
              添加回写任务(返回数据, false);
            }
            if (累计接收字节数 > 最大传输限额*1024*1024) {
              throw new Error (`达到最大传输限额: ${最大传输限额} MB`)
            }
            if ((累计接收字节数 - 字节计数) > 4*1024*1024) {
              await new Promise(resolve => setTimeout(resolve, 获取当前总延迟() + 500));
              if (回写队列) {
                await 回写队列;
                await new Promise(resolve => setTimeout(resolve, 获取当前总延迟() + 0));
              }
              字节计数 = 累计接收字节数;
            }
          } else {
            添加回写任务(返回数据, false);
          }
        }
      }
    } catch (err) {
      异常结束 = true;
      清理资源();
    }
  }
  function 带超时读取(读取数据, 超时) {
    try {
      return new Promise((resolve) => {
        const timeoutId = setTimeout(() => {
          resolve({ done: true, value: null, 超时: true }); // ✅ 读取超时
        }, 超时);
        读取数据.read().then(result => {
          clearTimeout(timeoutId);
          resolve({ ...result, 超时: false }); // ✅ 正常返回
        });
      });
    } catch (e){ throw e };
  }
  function 添加回写任务(返回数据, 是否延迟) {
    回写队列 = 回写队列.then(async () => {
      if (是否延迟) await new Promise(resolve => setTimeout(resolve, 获取当前总延迟() + 200));
      WS接口.send(返回数据);
    }).catch();
  }
  async function 定时双端保活() {
    while (!已清理资源) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      写入队列 = 写入队列.then(() => 传输数据.write(new Uint8Array(0))).catch();
      WS接口.send('');
    }
  }
  async function 清理资源() {
    if (已清理资源) return;
    已清理资源 = true;
    try {
      if (异常结束) {
        if (写入队列) await 写入队列;
        if (回写队列) await 回写队列;
      }
      TCP接口.close?.();
      WS接口.close(1000);
    } catch {}
  }
}
//////////////////////////////////////////////////////////////////////////SOCKS5部分//////////////////////////////////////////////////////////////////////
async function 创建SOCKS5接口(识别地址类型, 访问地址, 访问端口, 转换访问地址) {
  const { 账号, 密码, 地址, 端口 } = await 获取SOCKS5账号(我的SOCKS5账号);
  const SOCKS5接口 = connect({ hostname: 地址, port: 端口 });
  try {
    await SOCKS5接口.opened;
  } catch {
    return new Response('SOCKS5未连通', { status: 400 });
  }
  const 传输数据 = SOCKS5接口.writable.getWriter();
  const 读取数据 = SOCKS5接口.readable.getReader();
  const 转换数组 = new TextEncoder(); //把文本内容转换为字节数组，如账号，密码，域名，方便与S5建立连接
  const 构建S5认证 = new Uint8Array([5, 2, 0, 2]); //构建认证信息,支持无认证和用户名/密码认证
  await 传输数据.write(构建S5认证); //发送认证信息，确认目标是否需要用户名密码认证
  const 读取认证要求 = (await 读取数据.read()).value;
  if (读取认证要求[1] === 0x02) { //检查是否需要用户名/密码认证
    if (!账号 || !密码) {
      return 关闭接口并退出();
    }
    const 构建账号密码包 = new Uint8Array([ 1, 账号.length, ...转换数组.encode(账号), 密码.length, ...转换数组.encode(密码) ]); //构建账号密码数据包，把字符转换为字节数组
    await 传输数据.write(构建账号密码包); //发送账号密码认证信息
    const 读取账号密码认证结果 = (await 读取数据.read()).value;
    if (读取账号密码认证结果[0] !== 0x01 || 读取账号密码认证结果[1] !== 0x00) { //检查账号密码认证结果，认证失败则退出
      return 关闭接口并退出();
    }
  }
  switch (识别地址类型) {
    case 1: // IPv4
      转换访问地址 = new Uint8Array( [1, ...访问地址.split('.').map(Number)] );
      break;
    case 2: // 域名
      转换访问地址 = new Uint8Array( [3, 访问地址.length, ...转换数组.encode(访问地址)] );
      break;
    case 3: // IPv6
      转换访问地址 = new Uint8Array( [4, ...访问地址.split(':').flatMap(x => [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2), 16)])] );
      break;
    default:
      return 关闭接口并退出();
  }
  const 构建转换后的访问地址 = new Uint8Array([ 5, 1, 0, ...转换访问地址, 访问端口 >> 8, 访问端口 & 0xff ]); //构建转换好的地址消息
  await 传输数据.write(构建转换后的访问地址); //发送转换后的地址
  const 检查返回响应 = (await 读取数据.read()).value;
  if (检查返回响应[0] !== 0x05 || 检查返回响应[1] !== 0x00) {
    return 关闭接口并退出();
  }
  传输数据.releaseLock();
  读取数据.releaseLock();
  return SOCKS5接口;
  function 关闭接口并退出() {
    传输数据.releaseLock();
    读取数据.releaseLock();
    SOCKS5接口.close();
    return new Response('SOCKS5握手失败', { status: 400 });
  }
}
async function 获取SOCKS5账号(SOCKS5) {
  const [账号段, 地址段] = SOCKS5.split("@");
  const [账号, 密码] = [账号段.slice(0, 账号段.lastIndexOf(":")), 账号段.slice(账号段.lastIndexOf(":") + 1)];
  const [地址, 端口] = [地址段.slice(0, 地址段.lastIndexOf(":")), 地址段.slice(地址段.lastIndexOf(":") + 1)];
  return { 账号, 密码, 地址, 端口 };
}
//////////////////////////////////////////////////////////////////////////订阅页面////////////////////////////////////////////////////////////////////////
let 转码 = 'vl', 转码2 = 'ess', 符号 = '://', 小猫 = 'cla', 咪 = 'sh', 我的私钥;
if (私钥开关) {
  我的私钥 = `my-key: ${咦这是我的私钥哎}`
} else {
  我的私钥 = ""
}
function 给我订阅页面(哎呀呀这是我的ID啊, hostName) {
return `
1、本worker的私钥功能只支持${小猫}${咪}，仅open${小猫}${咪}和${小猫}${咪} meta测试过，其他${小猫}${咪}类软件自行测试
2、若使用通用订阅请关闭私钥功能
3、其他需求自行研究
通用的：https${符号}${hostName}/${哎呀呀这是我的ID啊}/${转码}${转码2}
猫咪的：https${符号}${hostName}/${哎呀呀这是我的ID啊}/${小猫}${咪}
`;
}
function 给我通用配置文件(hostName) {
if (我的优选.length === 0){
  我的优选 = [`${hostName}:443`]
}
if (私钥开关) {
  return `请先关闭私钥功能`
}else {
  return 我的优选.map(获取优选 => {
    const [主内容,tls] = 获取优选.split("@");
    const [地址端口, 节点名字 = 我的节点名字] = 主内容.split("#");
    const 拆分地址端口 = 地址端口.split(":");
    const 端口 =拆分地址端口.length > 1 ? Number(拆分地址端口.pop()) : 443;
    const 地址 = 拆分地址端口.join(":");
    const TLS开关 = tls === 'notls' ? 'security=none' : 'security=tls';
    return `${转码}${转码2}${符号}${哎呀呀这是我的VL密钥}@${地址}:${端口}?encryption=none&${TLS开关}&sni=${hostName}&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#${节点名字}`;
  }).join("\n");
}
}
function 给我小猫咪配置文件(hostName) {
if (我的优选.length === 0){
  我的优选 = [`${hostName}:443`]
}
const 生成节点 = (我的优选) => {
  return 我的优选.map(获取优选 => {
    const [主内容,tls] = 获取优选.split("@");
    const [地址端口, 节点名字 = 我的节点名字] = 主内容.split("#");
    const 拆分地址端口 = 地址端口.split(":");
    const 端口 =拆分地址端口.length > 1 ? Number(拆分地址端口.pop()) : 443;
    const 地址 = 拆分地址端口.join(":").replace(/^\[(.+)\]$/, '$1');
    const TLS开关 = tls === 'notls' ? 'false' : 'true';
  return {
    nodeConfig: `- name: ${节点名字}-${地址}-${端口}
  type: ${转码}${转码2}
  server: ${地址}
  port: ${端口}
  uuid: ${哎呀呀这是我的VL密钥}
  udp: false
  tls: ${TLS开关}
  sni: ${hostName}
  network: ws
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}
      ${我的私钥}`,
    proxyConfig: `    - ${节点名字}-${地址}-${端口}`
    };
  });
};
const 节点配置 = 生成节点(我的优选).map(node => node.nodeConfig).join("\n");
const 代理配置 = 生成节点(我的优选).map(node => node.proxyConfig).join("\n");
return `
dns:
  nameserver:
    - 180.76.76.76
    - 2400:da00::6666
  fallback:
    - 8.8.8.8
    - 2001:4860:4860::8888
proxies:
${节点配置}
proxy-groups:
- name: 🚀 节点选择
  type: select
  proxies:
    - 自动选择
${代理配置}
- name: 自动选择
  type: url-test
  url: http://www.gstatic.com/generate_204
  interval: 60 #测试间隔
  tolerance: 30
  proxies:
${代理配置}
- name: 漏网之鱼
  type: select
  proxies:
    - DIRECT
    - 🚀 节点选择
rules:
  - DOMAIN-SUFFIX,gvt1.com,🚀 节点选择
  - DOMAIN-SUFFIX,gvt2.com,🚀 节点选择
  - DOMAIN-SUFFIX,android.clients.google.com,🚀 节点选择
  - DOMAIN-SUFFIX,play.googleapis.com,🚀 节点选择
  - DOMAIN-SUFFIX,play.google.com,🚀 节点选择 
  - DOMAIN-SUFFIX,youtube.com,🚀 节点选择
  - DOMAIN-SUFFIX,googlevideo.com,🚀 节点选择
  - DOMAIN-SUFFIX,ytimg.com,🚀 节点选择
  - DOMAIN-SUFFIX,youtubei.googleapis.com,🚀 节点选择
  - DOMAIN-KEYWORD,youtube,🚀 节点选择
  - GEOSITE,google,🚀 节点选择
  - DOMAIN-SUFFIX,tiktok.com,🚀 节点选择
  - DOMAIN-SUFFIX,tiktokcdn.com,🚀 节点选择
  - DOMAIN-SUFFIX,byteoversea.com,🚀 节点选择
  - GEOIP,GOOGLE,🚀 节点选择,no-resolve
  - GEOSITE,netflix,🚀 节点选择
  - GEOIP,NETFLIX,🚀 节点选择,no-resolve
  - GEOSITE,telegram,🚀 节点选择
  - GEOIP,TELEGRAM,🚀 节点选择,no-resolve
  - GEOSITE,openai,🚀 节点选择
  - GEOSITE,gfw,🚀 节点选择
  - GEOSITE,cn,DIRECT
  - GEOIP,CN,DIRECT,no-resolve
  - MATCH,漏网之鱼
`
}