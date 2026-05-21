namespace api.DTOs.Products;

public class ListProductsDto : BaseProductDto
{
    public required string Id { get; set; }
    public string? ImageUrl { get; set; }
}
