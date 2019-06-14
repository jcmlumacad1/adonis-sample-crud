'use strict'

const Department = use('App/Models/Department')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with departments
 */
class DepartmentController {
  /**
   * Show a list of all departments.
   * GET departments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let departments = await Department.all()
    return view.render('departments.index', {
      page: 'Departments',
      departments: departments.toJSON()
    })
  }

  /**
   * Render a form to be used for creating a new department.
   * GET departments/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('departments.create', {
      page: 'Create Department'
    })
  }

  /**
   * Create/save a new department.
   * POST departments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let { name } = request.all()
    await Department.create({
      name: name
    })
    return response.redirect('/departments')
  }

  /**
   * Display a single department.
   * GET departments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let { id } = params
    let department = await Department.find(id)
    return view.render('departments.show', {
      department: department.toJSON(),
      page: 'View Department'
    })
  }

  /**
   * Render a form to update an existing department.
   * GET departments/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let { id } = params
    let department = await Department.find(id)
    return view.render('departments.edit', {
      department: department.toJSON(),
      page: 'Edit Department'
    })
  }

  /**
   * Update department details.
   * PUT or PATCH departments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let { id } = params
    let { name } = request.all()
    let department = await Department.find(id)
    department.name = name
    await department.save()
    return response.redirect('/departments')
  }

  /**
   * Delete a department with id.
   * DELETE departments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let { id } = params
    let department = await Department.find(id)
    await department.delete()
    return response.redirect('/departments')
  }
}

module.exports = DepartmentController
