import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>
          Take your fitness to the next level with expert-led workout sessions! 
          Whether you're a beginner or an advanced athlete, our gym offers high-energy 
          sessions designed to improve strength, endurance, and flexibility.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our high-intensity bootcamps designed to push your limits! 
          Train with certified coaches in a motivating environment and achieve your 
          fitness goals faster.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength Training Bootcamp</h4>
            <p>
              Build muscle and improve endurance with our strength training sessions. 
              Learn proper form, lifting techniques, and get personalized coaching 
              for maximum results.
            </p>
          </div>
          <div>
            <h4>Cardio & Workout</h4>
            <p>
              Burn fat and boost your stamina with our high-intensity interval training (HIIT) sessions. 
              Perfect for those looking to shed weight and improve cardiovascular health.
            </p>
          </div>
          <div>
            <h4>Functional Fitness & Mobility</h4>
            <p>
              Enhance flexibility, balance, and core strength with functional fitness workouts. 
              Ideal for athletes and individuals recovering from injuries.
            </p>
          </div>
          <div>
            <h4>Boxing & MMA Conditioning</h4>
            <p>
              Train like a fighter with our boxing and MMA-inspired workouts. 
              Learn striking techniques, improve agility, and build explosive power in a fun, engaging way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
