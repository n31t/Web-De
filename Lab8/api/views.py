import json
from django.http.response import JsonResponse
from django.shortcuts import render

from api.models import Category, Product


def product_list(request):
    if (request.method == "GET"):
        products = Product.objects.all()
        products_json = [products.to_json() for product in products]
        return JsonResponse(products_json, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if (request.method == "GET"):
        return JsonResponse(product.to_json())


def category_list(request):
    if (request.method == "GET"):
        categories = Category.objects.all()
        categories_json = [category.to_json() for category in categories]
        return JsonResponse(categories_json, safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if (request.method == "GET"):
        return JsonResponse(category.to_json())


def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if (request.method == "GET"):
        products_json = [p.to_json() for p in category.products.all()]
        return JsonResponse(products_json, safe=False)
