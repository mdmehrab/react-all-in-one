export default function Practice() {
  return (
    <>
      {/* <a className=" btn-primary" href="#" role="button">
        Link
      </a>
      <button className="btn btn-warning" type="submit">
        Button
      </button>
      <input className="btn btn-secendery" type="button" value="Input" />
      <input
        className="btn btn-primary btn-lg"
        disabled
        type="submit"
        value="Submit"
      />
      <input className="btn btn-primary btn-sm" type="reset" value="Reset" /> */}

      {/* <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">
          Button
        </button>
        <button class="btn btn-primary" type="button">
          Button
        </button>

        <p class="d-inline-flex gap-1">
          <button type="button" class="btn" data-bs-toggle="button">
            Toggle button
          </button>
          <button
            type="button"
            class="btn active"
            data-bs-toggle="button"
            aria-pressed="true"
          >
            Active toggle button
          </button>
          <button type="button" class="btn" disabled data-bs-toggle="button">
            Disabled toggle button
          </button>
        </p>
        <p class="d-inline-flex gap-1">
          <button type="button" class="btn btn-primary" data-bs-toggle="button">
            Toggle button
          </button>
          <button
            type="button"
            class="btn btn-primary active"
            data-bs-toggle="button"
            aria-pressed="true"
          >
            Active toggle button
          </button>
          <button
            type="button"
            class="btn btn-primary"
            disabled
            data-bs-toggle="button"
          >
            Disabled toggle button
          </button>
        </p>

        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary btn-sm">
            Left
          </button>
          <button type="button" class="btn btn-warning">
            Middle
          </button>
          <button type="button" class="btn btn-secondary btn-lg">
            Right
          </button>
        </div>
        <div class="btn-group">
          <a href="#" class="btn btn-warning">
            Active link
          </a>
          <a href="#" class="btn btn-primary">
            Link
          </a>
          <a href="#" class="btn btn-primary">
            Link
          </a>
        </div>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger">
            Left
          </button>
          <button type="button" class="btn btn-warning">
            Middle
          </button>
          <button type="button" class="btn btn-success">
            Right
          </button>
        </div>

        <div
          class="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="btn-group me-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-primary">
              1
            </button>
            <button type="button" class="btn btn-primary">
              2
            </button>
            <button type="button" class="btn btn-primary">
              3
            </button>
            <button type="button" class="btn btn-primary">
              4
            </button>
            <button type="button" class="btn btn-primary">
              5
            </button>
            <button type="button" class="btn btn-primary">
              6
            </button>
            <button type="button" class="btn btn-primary">
              7
            </button>
            <button type="button" class="btn btn-primary">
              8
            </button>
            <button type="button" class="btn btn-primary">
              9
            </button>
            <button type="button" class="btn btn-primary">
              10
            </button>
            <button type="button" class="btn btn-primary">
              11
            </button>
          </div>
          <div class="btn-group me-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary">
              12
            </button>
            <button type="button" class="btn btn-secondary">
              13
            </button>
            <button type="button" class="btn btn-secondary">
              14
            </button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-info">
              15
            </button>
          </div>
        </div>
      </div> */}

      <div
        class="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group me-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-primary">
            1
          </button>
          <button type="button" class="btn btn-primary">
            2
          </button>
          <button type="button" class="btn btn-primary">
            3
          </button>
          <button type="button" class="btn btn-primary">
            4
          </button>
        </div>
        <div class="btn-group me-2" role="group" aria-label="Second group">
          <button type="button" class="btn btn-secondary">
            5
          </button>
          <button type="button" class="btn btn-secondary">
            6
          </button>
          <button type="button" class="btn btn-secondary">
            7
          </button>
        </div>
        <div class="btn-group" role="group" aria-label="Third group">
          <button type="button" class="btn btn-info">
            8
          </button>
        </div>
      </div>

      <div
        class="btn-group"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" class="btn btn-primary">
          1
        </button>
        <button type="button" class="btn btn-primary">
          2
        </button>

        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>

            <li>
              <a class="dropdown-item" href="">
                my dropdown
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="btn-group-vertical"
        role="group"
        aria-label="Vertical button group"
      >
        <button type="button" class="btn btn-primary">
          Button
        </button>
        <button type="button" class="btn btn-primary">
          Button
        </button>
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
        <div class="btn-group dropstart" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
        <div class="btn-group dropend" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
        <div class="btn-group dropup" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
