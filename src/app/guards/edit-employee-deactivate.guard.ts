import { Component } from "@angular/core";
import { CanDeactivateFn } from "@angular/router";
import { EditEmployeeDetails } from "../components/employee-details/edit-employee-details/edit-employee-details";

export const editEmployeeDeactivateGraud: CanDeactivateFn<EditEmployeeDetails> = (component) => {
    if (component.form()?.dirty) {
        return confirm('You have unsaved changes. Are you sure you want to leave?');
    }

    return true;
}