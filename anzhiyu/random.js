var posts=["2022/11/06/ConcurrentHashMap详解/","2021/08/21/CountDownLatch源码解析/","2021/04/25/JVM-1/","2021/04/26/JVM-2/","2021/04/25/JVM常用参数/","2021/05/19/RabbitMQ/","2021/07/20/ReentrantLock-lock（公平锁）最多要尝试加锁几次才会挂起？/","2021/05/13/SpringBoot自动装配/","2021/03/27/Rocketmq中的NameServer源码分析/","2021/05/20/SpringCloud1/","2021/05/02/Spring之IOC/","2021/05/25/Spring循环依赖/","2021/05/10/Spring注解/","2021/03/27/Synchronized/","2021/04/27/ThreadLocal/","2021/05/22/ThreadPoolExecutor/","2021/07/16/bytemd使用（vue版本）/","2021/05/06/b树和b-树的区别/","2021/04/18/git/","2023/05/23/github-引用其他仓库的issue/","2021/05/10/hashCode和equals关系/","2021/04/28/hashmap/","2023/05/29/hexo-next-主题优化‘/","2023/05/29/hexo-next-圆角边框/","2023/11/24/hexo部署到github两种方式对比/","2021/04/22/icarus-Theme-use/","2021/04/02/idea使用技巧/","2021/04/29/java-String/","2021/06/28/java的构造函数/","2021/05/05/java继承/","2021/04/29/java面试题/","2021/04/27/kafka-1/","2021/03/28/linux结构/","2021/03/29/mysql事务/","2021/04/18/mysql命令/","2021/03/31/mysql常见生产问题/","2021/03/24/mysql执行流程/","2021/04/04/mysql执行计划/","2021/04/01/mysql索引/","2021/03/31/mysql锁/","2021/06/12/oracle表空间/","2021/04/04/mysql集群/","2021/03/21/redis/","2021/05/08/redis之String/","2021/03/27/redis命令/","2021/04/23/redis基础数据类型/","2021/05/08/redis持久化/","2021/03/27/redis集群配置/","2023/05/29/robots-txt-使用/","2021/03/27/rocketmq/","2021/05/06/spring之AOP/","2021/04/23/spring事务/","2021/04/26/spring源码的gradle配置/","2021/04/04/sql语句/","2021/03/22/vagrant使用/","2021/03/27/volatile/","2021/05/15/“session，cookie和token”/","2021/05/07/一个有序且元素重复的数组来进行去重排序/","2021/05/03/一致性hash/","2023/05/07/不是吧，不是吧，现在的女生都这么恋爱脑啊！！！/","2021/01/01/为什么我要一个自己的博客？/","2021/04/18/互联网公司开发流程/","2021/07/17/从源码层面理解AQS/","2021/06/16/几种通信方式的区别和联系/","2021/05/13/分布式锁/","2021/06/12/动态规划/","2021/06/19/单例模式/","2021/05/23/实现一个简单的计算器/","2021/04/23/对于学历造假问题的思考/","2021/06/19/开闭原则/","2021/07/15/彻底理解IOC/","2021/07/10/情绪自由/","2020/12/29/我的2020/","2021/08/14/我的初恋/","2023/04/26/我的生日/","2021/03/27/排序算法/","2021/06/14/接口隔离原则/","2021/04/08/树/","2023/05/16/添加waline评论系统/","2021/04/21/红包算法/","2021/05/01/红黑树/","2021/03/22/缓存/","2023/05/29/解决hexo更新时间问题/","2021/06/14/迪米特法则/","2023/04/23/重新回到hexo/","2023/05/15/陈皓，一路走好！！！/","2021/05/26/零拷贝/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };