import {Component} from 'react'
import './index.css'

class FilterGroup extends Component {
  state = {employmentTypeList: []}

  ChangeCheckBoxStatus = event => {
    const {selectedCheckBox} = this.props
    const {employmentTypeList} = this.state
    console.log()
    if (employmentTypeList.length > 0) {
      selectedCheckBox(employmentTypeList.join('&'))
    }
  }

  render() {
    const {employmentTypesList, salaryRangesList, updateSalary} = this.props
    const {isChecked} = this.state

    return (
      <>
        <h1 className="category-heading">Type of Employment</h1>
        <ul className="categories-list">
          {employmentTypesList.map(each => (
            <li
              key={each.employmentTypeId}
              className="employment-type-list-class"
            >
              <input
                type="checkbox"
                id={each.employmentTypeId}
                onChange={() => this.ChangeCheckBoxStatus(isChecked)}
              />
              <label htmlFor={each.employmentTypeId} className="checkbox-label">
                {each.label}
              </label>
            </li>
          ))}
        </ul>
        <hr className="filter-line-separator" />
        <ul className="categories-list">
          {salaryRangesList.map(each => (
            <li key={each.salaryRangeId} className="employment-type-list-class">
              <input
                type="radio"
                name="salary"
                id={each.salaryRangeId}
                onClick={() => updateSalary(each.salaryRangeId)}
              />
              <label className="checkbox-label" htmlFor={each.salaryRangeId}>
                {each.label}
              </label>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default FilterGroup
