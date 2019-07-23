import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  DataTable,
  TableHeader,
  Textfield,
  Button
} from "react-mdl";

class Upload extends Component {
  render() {
    return (
      <div style={{ height: "300px", position: "relative" }}>
        <Layout>
          <Grid className="contact-grid">
            <Cell>
              <p>In this page, you can upload your CV</p>

              <Content />
              <Content>
                <Textfield
                  onChange={() => {}}
                  label="Name..."
                  style={{ width: "200px" }}
                />
              </Content>

              <Content>
                <Textfield
                  onChange={() => {}}
                  label="Univercity..."
                  style={{ width: "200px" }}
                />{" "}
                {/* <Content>
                <p style={{ color: "white" }}> heyyy </p>
              </Content> */}
                <Textfield
                  onChange={() => {}}
                  label="Major..."
                  style={{ width: "200px" }}
                />
              </Content>
              <Content>
                <Button raised ripple>
                  Upload here
                </Button>
                <Button primary>Submit</Button>
              </Content>
            </Cell>
          </Grid>
        </Layout>
      </div>
    );
  }
}

export default Upload;
