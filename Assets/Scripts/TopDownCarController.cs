using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TopDownCarController : MonoBehaviour
{
    [Header("Car settings")]
    public float driftFactor = 0.95f;
    public float accelerationFactor = 30.0f;
    public float turnFactor = 3.5f;

    //local variables 
    private float accelerationInput = 0;
    private float steeringInput = 0;

    private float rotationAngle = 0;

    //Components
    Rigidbody2D carRigidBody2D;

    void Awake()
    {
        carRigidBody2D = GetComponent<Rigidbody2D>();
    }
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

    }

    void FixedUpdate()
    {
        ApplyEngineForce();

        KillOrthogonalVelocity();

        ApplySteeringForce();
    }

    void ApplyEngineForce()
    {
        Vector2 engineForceVector = transform.up * accelerationInput * accelerationFactor;

        carRigidBody2D.AddForce(engineForceVector, ForceMode2D.Force);
    }

    void ApplySteeringForce()
    {
        float minSpeedBeforeAllowTurningFactor = (carRigidBody2D.velocity.magnitude/8);
        minSpeedBeforeAllowTurningFactor = Mathf.Clamp01(minSpeedBeforeAllowTurningFactor);

        rotationAngle -= steeringInput * turnFactor * minSpeedBeforeAllowTurningFactor;

        carRigidBody2D.MoveRotation(rotationAngle);
    }

    void KillOrthogonalVelocity()
    {
        Vector2 forwardVelocity = transform.up * Vector2.Dot(carRigidBody2D.velocity, transform.up);
        Vector2 rightVelocity = transform.right * Vector2.Dot(carRigidBody2D.velocity, transform.right);
        //Vector2 leftVelocity = transform.left * Vector2.Dot(carRigidBody2D.velocity, transform.left);
        //Vector2 downVelocity = transform.down * Vector2.Dot(carRigidBody2D.velocity, transform.down);

        carRigidBody2D.velocity = forwardVelocity + rightVelocity * driftFactor;
    }

    public void SetInputVector(Vector2 inputVector)
    {
        steeringInput = inputVector.x;
        accelerationInput = inputVector.y;
    }

}
