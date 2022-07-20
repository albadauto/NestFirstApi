import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Response } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService){}

    @Get('list')
    findAll(@Response() response) {
        return this.coursesService.findAll();
    }

    @Get(':id')
    findOne(@Param() params) {
        const course = this.coursesService.findOne(params.id);
        if (!course){
            throw new HttpException(`Course ID ${params.id} not found`, HttpStatus.NOT_FOUND)
        }
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body){ //Pegar algo no body
        return this.coursesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() Body){
        return this.coursesService.update(id, Body);
    }
}
