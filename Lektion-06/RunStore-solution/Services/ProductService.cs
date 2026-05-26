using RunStore.Interfaces;
using RunStore.Models;

namespace RunStore.Services;

public class ProductService(HttpClient httpClient) : IProductService
{
    public async Task<RunStoreResponse<Product>> FindProduct(string id)
    {
        try
        {
            var response = await httpClient.GetFromJsonAsync<RunStoreResponse<Product>>("products/" + id);
            return response!;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    public async Task<RunStoreResponse<Product>> ListProducts()
    {
        try
        {
            var response = await httpClient.GetFromJsonAsync<RunStoreResponse<Product>>("products");

            if (response?.Data is null)
            {
                return new RunStoreResponse<Product>
                {
                    Data = null,
                    Items = 0,
                    PageNumber = 0,
                    PageSize = 0
                };
            }

            return response;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

    }
}
