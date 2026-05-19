using Microsoft.AspNetCore.Mvc;

namespace RunStore.Controllers
{
    public class ContactController : Controller
    {
        // GET: ContactController
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Add()
        {
            return View();
        }

    }
}
