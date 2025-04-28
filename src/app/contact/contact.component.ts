import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  // For reactive forms
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    // Initialize the form group
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Submit handler
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.http.post('http://localhost:8081/contact', this.contactForm.value)
        .subscribe(
          response => {
            console.log('Email sent successfully', response);
          },
          error => {
            console.error('Error sending email', error);
          }
        );
    } else {
      console.log('Form is invalid');
    }
  }
}
