using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Login.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(string email, string password)
        {
            if (ModelState.IsValid)
            {
                //var result = await signInManager.PasswordSignInAsync(vm.Email, vm.Password);
                //if (result.Succeeded)
              // {
                    return RedirectToAction("Index", "Home");
              //  }
              //  ModelState.AddModelError("", "Invalid Login Attempt.");
              //  return View(email);
            }
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public async Task<IActionResult> newUser(String Email, String Password, String Name, int PhoneNumber)
        {
            if (ModelState.IsValid)
            {
                //var result = await signInManager.PasswordSignInAsync(vm.Email, vm.Password);
                //if (result.Succeeded)
                // {
                return RedirectToAction("Index", "Home");
                //  }
                //  ModelState.AddModelError("", "Invalid Login Attempt.");
                //  return View(email);
            }
            return RedirectToAction("Index", "Home");
        }

    }
}