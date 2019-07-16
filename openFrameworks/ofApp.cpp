#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){

    ofBackground(0);
    
    for (int i=0; i<ofGetWidth(); i+=step){
    for (int j=0; j<ofGetHeight(); j+=step){

      float x = i;
      float y = j;
      float nX = x/ofGetWidth();
      float nY = y/ofGetHeight();

      ofSetColor(
        ofMap(x, 0, ofGetWidth(), 0, 255),
        ofMap(y, 0, ofGetHeight(), 0, 255),
        255
      );
      
      float size = (
                   glm::sin( (nX * -5.) + ofGetElapsedTimef() ) +
                   glm::sin( (nY * 5.) + ofGetElapsedTimef() ) +
                   glm::cos( (nX * -10.) + pi*0.5 ) +
                   glm::sin( (nY * 5.) + pi ) +
                   glm::sin( (nX * 8.) + pi )
                  ) * amp;

      ofDrawEllipse( x, y, size, size);

    }
  }

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
