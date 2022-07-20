import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id:1,
            name:"Teste",
            description:"Testeee",
            tags: ["node.js", "nest js", "javascript", "typescript"]
        }
    ];

    findAll(){
        return this.courses;
    }

    findOne(id: string){
        return this.courses.find((course) => course.id === Number(id))
    }

    create(createCourseDto: any){
        this.courses.push(createCourseDto);
    }

    update(id: string, updateDto: any){
        const indexCourse = this.courses.findIndex(course => course.id === Number(id))
        this.courses[indexCourse] = updateDto
    }

    remove(id: string){
        return this.courses.filter((val) => val.id !== Number(id))
    }

}
