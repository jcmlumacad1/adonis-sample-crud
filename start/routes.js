'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('departments', 'DepartmentController.index')
Route.get('departments/create', 'DepartmentController.create')
Route.post('departments', 'DepartmentController.store')
Route.get('departments/:id', 'DepartmentController.show')
Route.get('departments/:id/edit', 'DepartmentController.edit')
Route.put('departments/:id', 'DepartmentController.update')
Route.delete('departments/:id', 'DepartmentController.destroy')

Route.get('users', 'UserController.index')
Route.get('users/create', 'UserController.create')
Route.post('users', 'UserController.store')
Route.get('users/:id', 'UserController.show')
Route.get('users/:id/edit', 'UserController.edit')
Route.patch('users/:id', 'UserController.update')
Route.delete('users/:id', 'UserController.destroy')