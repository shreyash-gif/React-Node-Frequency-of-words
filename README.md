# Word Frequency Analyzer  

## Overview  
Word Frequency Analyzer is a web application that accepts a URL, fetches the content of the webpage, and analyzes the top 10 most frequent words on that page. The frontend is built using React, and the backend uses Node.js with Express. The application uses `axios` for HTTP requests and `cheerio` for HTML parsing.  

## Features  
- Accepts a URL as input.  
- Extracts and processes webpage content to calculate word frequencies.  
- Displays the top 10 most frequent words and their counts in a sortable, interactive table.  
- Real-time communication between frontend and backend using REST API.  

## Tech Stack  
### **Frontend**:  
- React  
- Axios  

### **Backend**:  
- Node.js  
- Express  
- Axios  
- Cheerio  

### **Styling**:  
- CSS  

---

## Installation  

### Prerequisites  
- Node.js and npm installed on your system.  

### Steps to Run Locally  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/word-frequency-analyzer.git  
   cd word-frequency-analyzer  
   ```  

2. Setup the backend:  
   ```bash  
   cd backend  
   npm install  
   node index.js  
   ```  
   The backend will start on `http://localhost:5000`.  

3. Setup the frontend:  
   ```bash  
   cd frontend  
   npm install  
   npm start  
   ```  
   The frontend will start on `http://localhost:3000`.  

---

## Usage  

1. Open the application in your browser at `http://localhost:3000`.  
2. Enter a valid URL in the input field.  
3. Click the "Analyze" button to process the webpage.  
4. View the top 10 frequent words and their counts in the table.  
5. Click on column headers (Word/Frequency) to sort the table.  

---

## Folder Structure  

```plaintext  
word-frequency-analyzer/  
├── backend/  
│   ├── index.js     # Backend server code  
│   └── package.json # Backend dependencies  
├── frontend/  
│   ├── src/  
│   │   ├── App.js   # Main React component  
│   │   └── App.css  # Styling  
│   ├── public/      # Static files  
│   └── package.json # Frontend dependencies  
```  

---

## API Endpoints  

- **POST `/analyze`**:  
  - Request Body:  
    ```json  
    { "url": "<website-url>" }  
    ```  
  - Response:  
    ```json  
    { "topWords": [ { "word": "example", "frequency": 15 }, ... ] }  
    ```  

---

## Example Usage  

### Input:  
URL: `https://www.geeksforgeeks.org/turing-machine-in-toc/`  

### Output:  
| Word       | Frequency |  
|------------|-----------|  
| search     | 82        |  
| elementor  | 61        |  
| true       | 40        |  
| ai         | 37        |  
| image      | 35        |  
| a          | 31        |  
| expertrec  | 30        |  
| box        | 28        |  
| var        | 25        |  
| and        | 24        |  

---




Feel free to contribute to this project by submitting issues or pull requests. Happy coding! 🎉  
