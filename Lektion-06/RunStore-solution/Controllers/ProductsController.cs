using Microsoft.AspNetCore.Mvc;
using RunStore.Interfaces;

namespace RunStore.Controllers
{
    public class ProductsController(IProductService productService) : Controller
    {
        public async Task<ActionResult> Index()
        {
            var result = await productService.ListProducts();

            return View(result.Data);
        }

        public async Task<ActionResult> Details(string Id)
        {
            var result = await productService.FindProduct(Id);
            if (result.Data?[0] is not null) return View(result.Data[0]);

            return View("_NotFound");
        }

    }
}
