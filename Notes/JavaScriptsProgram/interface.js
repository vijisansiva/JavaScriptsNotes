class tv
{
    start()
    {
        throw new Error("erwer");
    }
    stop()
    {
        throw new Error("rjwhthrwt");
    }
};
class acc extends tv{
    start()
    {
        console.log("start work")
    }
    stop()
    {
        console.log("stop")
    }
};
let s =new acc()
s.start()
s.stop()
