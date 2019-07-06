import React, { Component } from 'react';
import './About.css';
import { Link } from "react-router-dom"
class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h3 className="mt-5 mb-4">one</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div class="card w-100 odd">
                <div class="card-body">
                  <h5 class="card-title">Title 1</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos in sit eligendi harum reiciendis aperiam quidem vitae iure, facilis doloribus dolor, sint odio nihil vel autem, dolore porro repudiandae beatae odit praesentium. Harum nesciunt, inventore eligendi dignissimos dolor dolore praesentium, rerum consectetur vero asperiores excepturi quis voluptas accusamus ipsa sequi quaerat ipsum? Incidunt reiciendis voluptatem obcaecati aliquid sit nobis aspernatur soluta rerum laudantium cumque at quasi optio hic enim, eveniet dolore minima sint, tempore explicabo corrupti repudiandae, quas dolores consectetur. Molestiae voluptatum nesciunt sunt ad odit excepturi laudantium temporibus laboriosam iste ex aperiam corporis saepe totam, suscipit vitae quasi.</p>
                  <a href="#" class="btn btn-primary">Button</a>
                </div>
              </div>
              <div class="card w-100 even">
                <div class="card-body">
                  <h5 class="card-title">Title 2</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos in sit eligendi harum reiciendis aperiam quidem vitae iure, facilis doloribus dolor, sint odio nihil vel autem, dolore porro repudiandae beatae odit praesentium. Harum nesciunt, inventore eligendi dignissimos dolor dolore praesentium, rerum consectetur vero asperiores excepturi quis voluptas accusamus ipsa sequi quaerat ipsum? Incidunt reiciendis voluptatem obcaecati aliquid sit nobis aspernatur soluta rerum laudantium cumque at quasi optio hic enim, eveniet dolore minima sint, tempore explicabo corrupti repudiandae, quas dolores consectetur. Molestiae voluptatum nesciunt sunt ad odit excepturi laudantium temporibus laboriosam iste ex aperiam corporis saepe totam, suscipit vitae quasi.</p>
                  <a href="#" class="btn btn-primary">Button</a>
                </div>
              </div>
              <div class="card w-100 odd">
                <div class="card-body">
                  <h5 class="card-title">Title 3</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos in sit eligendi harum reiciendis aperiam quidem vitae iure, facilis doloribus dolor, sint odio nihil vel autem, dolore porro repudiandae beatae odit praesentium. Harum nesciunt, inventore eligendi dignissimos dolor dolore praesentium, rerum consectetur vero asperiores excepturi quis voluptas accusamus ipsa sequi quaerat ipsum? Incidunt reiciendis voluptatem obcaecati aliquid sit nobis aspernatur soluta rerum laudantium cumque at quasi optio hic enim, eveniet dolore minima sint, tempore explicabo corrupti repudiandae, quas dolores consectetur. Molestiae voluptatum nesciunt sunt ad odit excepturi laudantium temporibus laboriosam iste ex aperiam corporis saepe totam, suscipit vitae quasi.</p>
                  <a href="#" class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }

}

export default About;

