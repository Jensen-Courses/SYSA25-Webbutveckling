namespace api.Helpers;

public class SingleResult<R>(R data)
{
    public int PageNumber { get; set; } = 1;
    public int PageSize { get; set; } = 1;
    public int Items { get; set; } = 1;
    public R Data { get; set; } = data;
}
