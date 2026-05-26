using RunStore.Models;

namespace RunStore.Interfaces;

public interface IProductService
{
    Task<RunStoreResponse<Product>> ListProducts();
    Task<RunStoreResponse<Product>> FindProduct(string id);
}
