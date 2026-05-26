namespace RunStore.Models;

public class RunStoreResponse<T> where T : class
{
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public int Items { get; set; }
    public List<Product>? Data { get; set; }
}
