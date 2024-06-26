import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
   */

  @Get()
  @Redirect('https://nestjs.com', 301)

  // GET /users or /users?role=value
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  // GET /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // POST /users
  @Post()
  create(@Body() user: {}) {
    return user;
  }

  // PATCH /users/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  // DELETE /users/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
