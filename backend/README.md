# Project Backend

This is the backend service for the application. Currently, it serves **dummy data** via `run.py` for frontend integration testing.

## Local Setup Instructions

Follow these steps to set up and run the backend locally:

### 1. Create a Virtual Environment
If you haven't already, create a fresh virtual environment:
```bash
python -m venv .venv
```

### 2. Activate the Virtual Environment
Activate the environment based on your Operating System:

* **macOS / Linux:**
  ```bash
  source .venv/bin/activate
  ```
* **Windows (Command Prompt):**
  ```cmd
  .venv\Scripts\activate.bat
  ```
* **Windows (PowerShell):**
  ```powershell
  .venv\Scripts\Activate.ps1
  ```

Once activated, your terminal prompt will show `(.venv)`.

### 3. Install Dependencies
Install all the required python packages listed in the requirements file:
```bash
pip install -r requirements.txt
```

### 4. Run the Application
Start the temporary dummy development server:
```bash
python run.py
```

---

## 🛑 Stopping the Environment

To shut down the backend server, press `Ctrl + C` in your terminal. 

To exit and turn off the virtual environment safely, run:
```bash
deactivate
```
