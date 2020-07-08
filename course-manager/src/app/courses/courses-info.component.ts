import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course'
import { CourseService } from './course.service';

@Component({
    templateUrl: './courses-info.component.html'
})
 
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(private ActivatedRoute: ActivatedRoute, private courseService: CourseService) {

    }

    ngOnInit(): void {
        this.courseService.retrieveById(+this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log("Error", err)
        }); 
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log("Saved with success", course),
            error: err => console.log("Error", err)
        })
    }
}