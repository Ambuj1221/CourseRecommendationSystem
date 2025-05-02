const courses = [
    {
      name: "JavaScript Basics",
      category: "Programming",
      description: "Learn JS from scratch.",
      link: "https://www.udemy.com/course/the-complete-javascript-course/?couponCode=IND21PM"
    },
    {
      name: "Advanced CSS",
      category: "Design",
      description: "Master modern layouts.",
      link: "https://www.udemy.com/course/advanced-css-and-sass/"
    },
    {
      name: "React for Beginners",
      category: "Programming",
      description: "Intro to React.",
      link: "#"
    },
    {
      name: "Digital Marketing 101",
      category: "Marketing",
      description: "Grow your brand.",
      link: "#"
    },
    {
      name: "UI/UX Design",
      category: "Design",
      description: "Design beautiful interfaces.",
      link: "https://nextleap.app/lp/course/ui-ux-design-course"
    },
    {
      name: "Python Programming",
      category: "Programming",
      description: "Learn Python easily.",
      link: "#"
    }
  ];
  
  const courseList = document.getElementById("courseList");
  const recommendedList = document.getElementById("recommendedCourses");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  
  function displayCourses(courseArray, container) {
    container.innerHTML = "";
    courseArray.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML = `
        <h3><a href="${course.link}" target="_blank">${course.name}</a></h3>
        <p>${course.description}</p>
        <p><strong>${course.category}</strong></p>
      `;
      container.appendChild(card);
    });
  }
  
  function updateCourseDisplay() {
    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
  
    const filtered = courses.filter(course =>
      course.name.toLowerCase().includes(search) &&
      (category === "All" || course.category === category)
    );
  
    displayCourses(filtered, courseList);
  }
  
  function showRecommendations() {
    const recommended = [];
    while (recommended.length < 2) {
      const random = courses[Math.floor(Math.random() * courses.length)];
      if (!recommended.includes(random)) {
        recommended.push(random);
      }
    }
    displayCourses(recommended, recommendedList);
  }
  
  searchInput.addEventListener("input", updateCourseDisplay);
  categoryFilter.addEventListener("change", updateCourseDisplay);
  
  displayCourses(courses, courseList);
  showRecommendations();
  