from django.contrib import admin
from django.urls import path
from api.views import CompaniesView, VacanciesView, VacanciesCompanyView, get_top_ten_vacancies
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', CompaniesView.as_view()),
    path('api/companies/<int:pk>/', CompaniesView.as_view()),
    path('api/companies/<int:pk_c>/vacancies/', VacanciesCompanyView.as_view()),
    path('api/vacancies/', VacanciesView.as_view()),
    path('api/vacancies/<int:pk>', VacanciesView.as_view()),
    path('api/vacancies/top_ten/', get_top_ten_vacancies),
]
